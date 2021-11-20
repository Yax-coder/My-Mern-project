const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config');

const User = require('../../models/User');

// @route   Post api/users
// @desc    Register users route
// @access  Public
router.post('/', [
     check('name', 'name is required').not().isEmpty(),
     check('email', 'p;ease include a valid email').isEmail(),
     check('password',
          'p;ease enter a password with six or more characters')
          .isLength({ min: 6 }),

], async (req, res) => {
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
          res.status(400).json({ errors: errors.array() })
     }

     const { name, email, password } = req.body

     try {
          // see if user exist

          let user = await User.findOne({ email });

          if (user) {
               return res.status(400)
                    .json({ errors: [{ msg: 'User with this email already exist' }] })
          }

          // Get user gravatar

          const avatar = gravatar.url(email, {
               s: "200",
               r: "pg",
               d: "mm"
          })

          user = new User({
               name,
               email,
               avatar,
               password
          })

          // Encrypt password
          const salt = await bcrypt.genSalt(10);

          user.password = await bcrypt.hash(password, salt);


          await user.save();

          // Return json-web-token
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
