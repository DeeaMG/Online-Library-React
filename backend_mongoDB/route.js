const router = require('express').Router();
let userData = require('./schemas/userSchema');
let prodData = require('./schemas/prodSchema');

router.route('/get-user').get((req, res) => {
    // console.log('router.js');
    userData.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/get-prods').get((req, res) => {
  console.log('router.js PRODUCTS');
  prodData.find()
  .then(data => res.json(data))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/post-user').post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.pass;
  const timestamp = Date.now();

  const newUserData = new userData({
    username,
    email,
    password,
    timestamp,
  });

  console.log(newUserData);

  newUserData.save()
  .then(() => res.json('New user added'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;