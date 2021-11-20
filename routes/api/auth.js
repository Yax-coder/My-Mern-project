const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config');
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')



const User = require('../../models/User')

// @route   GET api/auth
// @desc    Tests post route
// @access  Public
router.get('/', auth, async (req, res) => {
     try {
          const user = await User.findById(req.user.id).select('-password');
          res.json(user)
     } catch (error) {
          console.error(error.message);
          res.status(500).send('Server Error')
     }
});

// @route   Post api/users
// @desc    Login users route
// @access  Public
router.post('/', [
     check('email', 'p;ease include a valid email').isEmail(),
     check('password',
          'password is required')
          .exists()

], async (req, res) => {
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
          res.status(400).json({ errors: errors.array() })
     }

     const { email, password } = req.body

     try {
          // see if user exist

          let user = await User.findOne({ email });

          if (!user) {
               return res.status(400)
                    .json({ errors: [{ msg: 'Invalid Credentials' }] })
          }
          const isMatch = await bcrypt.compare(password, user.password)
          if (!isMatch) {
               return res.status(400)
                    .json({ errors: [{ msg: 'Invalid Credentials' }] })
          }
          const payload = {
               user: {
                    id: user.id
               }
          }

          jwt.sign(payload, config.get('jwtSecret'), {
               expiresIn: 360000
          },
               (err, token) => {
                    if (err) throw err;
                    res.json({ token })
               }
          )

     } catch (error) {
          console.error(error.message);
          res.status(500).send('server error')
     }



});

module.exports = router;
