const router = require('express').Router();
const User = require('../../models/User.js');
const entry = require('../../models/entry.js')

// get all users
router.get('/api/users', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  User.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    },
    // include: [entry
    // {
    //   model: entry,
    //   attributes: ['id', 'title', 'post_url', 'created_at']
    // },
    // {
    //   model: Comment,
    //   attributes: ['id', 'comment_text', 'created_at'],
    //   include: {
    //     model: Post,
    //     attributes: ['title']
    //   }
    // },
    // {
    //   model: Post,
    //   attributes: ['title'],
    //   through: Vote,
    //   as: 'voted_posts'
    // }
    //]
  })
    .then(dbUserData => {
      // if (!dbUserData) {
      //   res.status(404).json({ message: 'No user found with this id' });
      //   return;
      // }
      //res.json(dbUserData);

    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/register', (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  User.create({
    name:req.body.name,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbUserData => {
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.post('/users/login', (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
console.log("here")
  User.findOne({
    where: {
      email: req.body.email,
    
      password:req.body.password
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

  //  const validPassword = dbUserData.checkPassword(req.body.password);

    // if (!validPassword) {
    //   res.status(400).json({ message: 'Incorrect password!' });

    //   return;
    // }
      req.session.save(() => {
      req.session.userId = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
      res.json({ user: dbUserData, message: "You are now logged In." })
      res.writeContinue();
    })
    console.log('You are now logged in!')
    res.json({ user: dbUserData, message: 'Logged in!' });
  });
});

router.put('/:id', (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}

  // pass in req.body instead to only update what's passed through
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;