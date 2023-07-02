const bcrypt = require("bcryptjs");
const User = require("../models/user");

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false,
    errorMessage: req.flash('error')
  });
};

exports.getSignup = (req, res, next) => {
  res.render("auth/signup", {
    path: "/signup",
    pageTitle: "Signup",
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email }).then((user) => {
    if (!user) {
      req.flash('error', 'invalid email')
    return  res.redirect('/login')
    }
      bcrypt.compare(password, user.password).then((doMatch) => {
        if(doMatch){
          req.session.isLoggedIn = true;
          req.session.user = user;
          return req.session
            .save((err) => {
              console.log(err);
              res.redirect("/");
            })
        }
        res.redirect('/login')
      })
    
  }).catch((err) => {
    console.log(err)
    res.redirect('/login')
});
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  User.findOne({ email: email })
    .then((userDoc) => {
      console.log(userDoc);
      if (userDoc) {
        return res.redirect("/signup");
      }
      return bcrypt.hash(password, 12).then((bcryptedPass) => {
        const user = new User({
          email: email,
          password: bcryptedPass,
          cart: { items: [] },
        });
        user.save().then((result) => {
          res.redirect("/login");
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postLogout = (req, res, next) => {
  
  req.session.destroy((err) => {
    console.log(err);
    
    res.redirect("/");
  });
};
