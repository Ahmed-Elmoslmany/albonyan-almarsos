const bcrypt = require("bcryptjs");
const User = require("../models/user");
const nodemailer = require("nodemailer");
// const mailGunTransport = require("nodemailer-mailgun-transport");

// const formData = require("form-data");
// const Mailgun = require("mailgun.js");
// const mailgun = new Mailgun(formData);

// const mg = mailgun.client({
//   username: "https://api.mailgun.net/v3/sandbox4a8f0cf72dbc4a74bfb7236a1aeb0280.mailgun.org",
//   key: "key-33722d2a3ced3163ea74a20578914076-5d9bd83c-37d76b4e",

// });

// MailGun
// const auth = {
//   auth: {
//     api_key: "key-5d9bd83c-37d76b4e",
//     domain: "sandbox4a8f0cf72dbc4a74bfb7236a1aeb0280.mailgun.org",
//     url:"https://api.mailgun.net/"
//   },
// };

// const nodemailerMailgunTransporter = nodemailer.createTransport(
//   mailGunTransport(auth)
// );

var transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c393d455dc9676",
    pass: "2bd76b72bb4bbc",
  },
});

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false,
    errorMessage: req.flash("error"),
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
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        req.flash("error", "invalid email");
        return res.redirect("/login");
      }
      bcrypt.compare(password, user.password).then((doMatch) => {
        if (doMatch) {
          req.session.isLoggedIn = true;
          req.session.user = user;
          return req.session.save((err) => {
            console.log(err);
            res.redirect("/");
          });
        }
        res.redirect("/login");
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/login");
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
        user
          .save()
          .then((result) => {
            res.redirect("/login");

            transporter
              .sendMail({
                from: "samy16795@gmail.com",
                to: email,
                subject: "Hey you, awesome!",
                text: "Mailgun rocks, pow pow!",
                html: "<h1>Hello my new user</h1>",
              })
              .then((msg) => console.log(msg)) // logs response data
              .catch((err) => console.log(err));
          })
          .catch((err) => {
            console.log(err);
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
