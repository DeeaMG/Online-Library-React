const router = require('express').Router();
let userData = require('./schemas/userSchema');

router.route('/').get((req, res) => {
    console.log('router.js');
    userData.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const email = req.body.email;
  const password = req.body.pass;

  const newUserData = new userData({
    email,
    password,
  });

  console.log(newUserData);

  newUserData.save()
  .then(() => res.json('New user added'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;