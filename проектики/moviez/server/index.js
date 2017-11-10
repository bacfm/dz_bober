const express = require('express'),
      historyFallback = require('express-history-api-fallback'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      userSchema = require('./schemas/User'),
      movieSchema = require('./schemas/movie'),
      app = express(),
      passport = require('passport'),
      LocalStrategy = require('passport-local'),
      root = `${__dirname}/../build`;

      //-------------Schemas ----------------
      const User = mongoose.model('User', userSchema);
      const Movie = mongoose.model('Movie', movieSchema);

      mongoose.connect('mongodb://localhost/moviez', {
          useMongoClient: true
      });
      mongoose.connection.on("open", () => {
          console.log('Mongoose connected!!!')
      })
      
      //-----------Middleware------------------
      app.use(express.static(root));
      app.use(bodyParser.urlencoded({ extended: false }));
      app.use(bodyParser.json());
      app.use(cookieParser());
      app.use(session({ secret: 'verysecretkey' }));
      app.use(passport.initialize());
      app.use(passport.session());


      passport.serializeUser((user, done) => {
        done(null, user.username);
      });
      
      passport.deserializeUser((username, done) => {
        User.findOne({ username }, (err, user) => {
          done(err, user);
        });
      });
      passport.use(new LocalStrategy((username, password, done) => {
          User.findOne({ username }, (err, user) => {
              if(err) return done(err);
              if(!user) return done(null, false, { message: 'Incorrect username' });
              if(!user.password === password) return done(null, false, { message: 'Incorrect password' });

              return done(null, user);
          })
      }));

      app.post("/login", passport.authenticate("local"), (req, res) => {
          console.log(req.user);
        if(req.user)
          return res.send(user)
        
        res.status(500).send({ errorText: "Failed to login" });
      })

      app.post('/signup', (req, res, next) => {
          const username = req.body.username ? req.body.username : null;
          const password = req.body.password ? req.body.password : null;
          console.log(req.body);
          User.create({ username: username, password: password }, (err, user) => {
              if(err) return res.render({ error: 'Please try again'});
              req.login(user, (err) => {
                  if(err) return next(err);
              });
          });
      });

      app.get('/logout', (req, res) => {
          req.logout();

          res.send(res);
      });   

      app.post('/add-movie', (req, res) => {
          const title = req.body.title ? req.body.title : null;
          const description = req.body.description ? req.body.description : null;
          const cover = req.body.cover ? req.body.cover : null;
          console.log(req.body);
          Movie.create({ title: title, description: description, cover: cover }, (err, movie) =>{
              if(err) return res.status(500);
          });
      });

      app.get('/movies', (req, res) => {
        Movie.find({}, (err, data) => {
            if(err) {
              return res.status(500).end();
            }
            const movielists = data.map(mv => ({
              id: mv._id,
              title: mv.title,
              description: mv.description,
              cover: mv.cover
            }));
        
            res.send({ movielists });
        });
      });     

      app.use(historyFallback('index.html', {root}));
      app.listen(3000, () => {
          console.log('Connected!!!');
      });