const router = require('express').Router();
const { log } = require('handlebars');
const { User } = require('../../models');

const { body, validationResult } = require('express-validator');

// CREATE new user
router.post('/', body('password').isStrongPassword(), async (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    // try {
    const dbUserData = await User.create({
      username: req.body.username,
      password: req.body.password,
    })
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
      res.status(200).json(dbUserData);
    })
    // .catch(err) {
    //   console.log(err);
    //   res.status(500).json(err);
    // }
  } else {
    res.json('Password has to be at least 8 characters and include 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special symbol')
  }
});

// User Login
router.post('/login', async (req, res) => {
  
  try {
    console.log(req.body.username, req.body.password);
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
        password: req.body.password
      },
    });
    
    if (!dbUserData) {
      console.log('No Data', dbUserData);
      res
      .status(400)
      .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }
    
    const validPassword = await dbUserData.checkPassword(req.body.password);
    
    if (!validPassword) {
      console.log('Bad password', dbUserData);
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }

    console.log('Session: ', req.session);

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;


      res
      .status(200)
      .json({ user: dbUserData, message: 'You are now logged in!' });
    });
    // res.json({ user: dbUserData, message: 'You are now logged in!' });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//User Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;