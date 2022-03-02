const express = require('express');
const router = express.Router();

const User = require('../../models/User');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.get(
  '/', 
  async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json({status:"Success", users:users})
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);


router.post(
  '/', 
  async (req, res) => {
    const { userdata } = req.body;
    try {
      const user = new User(userdata);
      await user.save();

      // const users = await User.find();
      res.status(200).json({status:"Success", users:users})
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

router.post(
  '/edit', 
  async (req, res) => {
    const { userdata } = req.body;
    try {
      const target = await User.findById(userdata.key);
      target.name = userdata.name;
      target.link = userdata.link;
      target.url = userdata.url;
      target.feedback = userdata.feedback;
      await target.save();

      const users = await User.find();
      res.status(200).json({status:"Success", users:users})
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
