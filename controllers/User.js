
// Auto-generated by AutoPilot on 04-08-2023 at 08:22:42

const router = require('express').Router(); //Import router and express
const User = require('../models/User'); //Import User model

//Get all the users
router.get('/api/v1/get', async (req, res) => { //Route for API
    try {
        const users = await User.find(); //Find all the users
        res.json(users); //Return the users
    } catch (err) {
        res.status(500).json({ message: err.message }); //Internal server error
    }
});

module.exports = router; //Export router