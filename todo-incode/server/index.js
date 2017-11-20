const express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    session = require('express-session'),
    todoSchema = require("./schemas/todo"),
    userSchema =require('./schemas/user'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    jwt = require('jsonwebtoken'),
    JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    options = {};

    const Todo = mongoose.model("appTodo", todoSchema);
    const User = mongoose.model('appUser', userSchema);

    options.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    options.secretOrKey = 'verysecret';

    app.use(passport.initialize());
    app.use(cors());
    app.use(bodyParser());
    app.use(bodyParser.urlencoded({ extended: true }));

//    passport.use( new LocalStrategy(
//     function(email, password, done) {
//       User.findOne({ email: email }, function (err, user) {
//         if (err) { return done(err); }
//         if (!user) {
//           return done(null, false, { message: 'Incorrect username.' });
//         }
//         if (!user.validPassword(password)) {
//           return done(null, false, { message: 'Incorrect password.' });
//         }
//         return done(null, user);
//       });
//     }
//   ));
  passport.use(new JwtStrategy(options, function(payload, done){
        console.log(payload)
      User.findById(payload.id, (err, user) => {
          if(err) return done(err);
          if(user) {
              return done(null, user);
          } else {
          return done(null, false);
          }
      });
  }));

    mongoose.connect('mongodb://localhost/todoapp', {
        useMongoCLient: true
    });
    mongoose.connection.on("open", () => {
        console.log("connected to mongoose")
    })


    // passport.serializeUser((user, done) => {
    //     done(null, user.login);
    //   });
      
    // passport.deserializeUser((login, done) => {
    //     User.findOne({ login }, (err, user) => {
    //       done(err, user);
    //     });
    //   });

    // app.post("/login", passport.authenticate('local', (req, res) => {
    //     console.log(req, res)
    //     // if(req.user) {
    //     //     const payload = {
    //     //         id: req.user.id,
    //     //         displayname: req.user.displayname,
    //     //         email: req.user.email
    //     //     };
    //     //     const token = jwt.sign(payload, 'verysecret');
    //     //     res.send({user: req.user.displayname, token: token})
    //     // }
    //     // res.status(404).send({message: 'Failed to login'});
    // }));

    app.post("/login", (req, res) => {
        console.log(req.body)
        User.findOne({ email: req.body.email }, (err, user) => {
            if(err) res.status(401).json('no such user found');
            if(user.password === req.body.password){
                const payload = {
                    id: user.id,
                    displayname: user.displayname,
                    email: user.email
                };
                const token = jwt.sign(payload, options.secretOrKey)
                res.json({ token: token })
            } else {
                res.status(401).json({ message: "invalid password"})
            }
        })
    })

    app.post("/signup", (req, res) => {
        // const displayname = req.body.displayname;
        // const email = req.body.email;
        // const password = req.body.password;
        console.log(req.body);
        User.create({ displayname: req.body.displayname, email: req.body.email, password: req.body.password }, (err, user) => {
            if(err) console.log(err);
        });
    });

    app.get("/todo", (req, res) => {
        Todo.find({}, (err, data) => {
            if(err) return res.status(500).end();
                const todoList = data.map(todo => ({
                    id: todo._id,
                    title: todo.title,
                    description: todo.description
                }));
                res.send({ todoList });
        });
    });
    app.post("/todo", (req, res) => {
        const title = req.body.title;
        const description = req.body.description;
        console.log(title, description);

        Todo.create({ title: title, description: description }, (err, todo) => {
            if(err) return res.status(500);
        });
    });

    app.delete("/todo", (req, res) => {
        const id = req.body.id;
        console.log(id);
        Todo.findByIdAndRemove( id, (err, todo) => {
           let response = {
               message: "Todo was deleted",
               id: todo._id
           };
           res.status(200).send(response);
        })
    });

    app.put("/todo", (req, res) => {
        const id = req.body.id;
        const title = req.body.title;
        const description = req.body.description;
        Todo.findById(id, (err,todo) => {
            todo.title = title || todo.title;
            todo.description = description || todo.description;

            todo.save((err, todo) => {
                if(err) res.status(500).send(err);
                res.status(200).send(todo);
            })
        })
    })
    User.find({}, (err, data) => {
        console.log(data);
    });
    app.listen(8888, () => {
        console.log("connected!!!")
    });