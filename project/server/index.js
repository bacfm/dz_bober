const express = require('express'),
      app = express(),
      session = require('express-session'),
      mongoose = require('mongoose'),
      userSchema = require('./schemas/users'),
      bodyParser = require('body-parser'),
      passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      historyFallback = require('express-history-api-fallback'),
      root = `${__dirname}/../build`;

      const User = mongoose.model('appUser', userSchema);
      
      mongoose.connect('mongodb://localhost/projectapp', {
        useMongoClient: true
      });
      mongoose.connection.on("open", () => {
        console.log('Connected!!!');
      })

      app.use(express.static(root));
      app.use(historyFallback('index.html', { root }));
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(bodyParser.json());
      app.use(session({ secret: 'verysecretkey'}));
      app.use(passport.initialize());
      app.use(passport.session());
      app.use((req, res, next) => {
        console.log("URL:", req.url);
        next();
      });

      passport.serializeUser((user, done) => {
        done(null, user.username);
      });

      passport.deserializeUser((username, done) => {
        User.findOne({ username }, (err, user) => {
          done(err, user);
        });
      });

      passport.use( new LocalStrategy((username, password, done) => {
        User.findOne({ username }, (err, user) => {
          if(err) return done(err);
          if(!user) return done(null, false, {message: "User was not found"});
          if(!user.password === password) return done(null, false, {message: "Incorrect password"});

          return done(null, user);
        });
      }));

      // app.get('/*', (req, res, next) => {
      //   const { url, user } = req;
      //   console.log("URL:", url, "USER:", user);
      //   if(!user && url !== '/login' && url !== '/signup'){
      //     return res.redirect('/login');
      //   }
      //     if(user && (url === '/login' || url === '/signup')){
      //       return res.redirect('/'); 
      //     }
      //     next();
      // });
      

      app.route('/login')
         .post(passport.authenticate("local", {
           successRedirect: '/',
           failureRedirect: '/login',
           failureFlash: true
         }))
      app.post('/signup', (req, res) => {
        const username = req.body.username ? req.body.username.trim() : null;
        const password = req.body.password ? req.body.passport.trim() : null;
        console.log(req);
        User.create({ username, password }, (err, user) => {
          if(err) return res.render({ error: 'Please try again'});
          req.login(user, (err) => {
            if(err) return res.redirect("/login");

            res.redirect('/');
          });
        });
        app.get('/signout', (req, res) => {
          req.logout();
          res.redirect('/login');
        });
      });



      app.listen(3000, () => {
        console.log('Connected');
      });