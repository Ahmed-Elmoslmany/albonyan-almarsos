const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('646e393c57f4a3889bdebbf4')
    .then(user => {
      console.log(user);
      req.user = user
      next();
    })
    .catch(err => console.log(err));
   
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    'mongodb+srv://AhmedElmoslmany:NeDEzAPWifFakArb@cluster0.qy1rggl.mongodb.net/shop?retryWrites=true&w=majority'
  )
  .then(result => {
    User.findOne().then(user => {
      if(!user){
        const user = new User({
          name: 'Ahmed',
          email: 'ahmed@test.com',
          cart: {
            items: []
          }
        })
        user.save()

      }
    })
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
