const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/users');

module.exports = function(passport){
    passport.serializeUser(function(user, done){
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done){
        User.findById(id, function(err, user){
            done(err, user);
        });
    });

    // Signup
    passport.use('signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, email, password, done){
        User.findOne({'local.email': email}, function(err, user){
            if (err){return done(err)}
            if (user){
                return done(null, false, req.flash('signupMessage', 'El correo que ingresó ya existe'));
            } else {
                let newUser = new User();
                newUser.local.email = email;
                newUser.local.password = newUser.generateHash(password);
                newUser.local.user_name = req.body.user_name;
                newUser.local.first_name = req.body.first_name;
                newUser.local.last_name = req.body.last_name;
                newUser.local.user_type = 'admin';
                newUser.save(function(err){
                    if (err) {throw err};
                    return done(null, newUser);
                });
            }
        })
    }
    ));

    // Login
    passport.use('login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, email, password, done){
        User.findOne({'local.email': email}, function(err, user){
            if (err){return done(err)}
            if (!user){
                return done(null, false, req.flash('loginMessage', 'Usuario no encontrado'));
            }
            if (!user.validatePassword(password)){
                return done(null, false, req.flash('loginMessage', 'Contraseña incorrecta'));
            }
            return done(null, user);
        });
    }
    ));
}