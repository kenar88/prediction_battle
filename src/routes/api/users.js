const express = require('express');

const dbModels = require('../../../database/models/');
const Users = require('../models/Users');

const router = express.Router();
const users = new Users(dbModels);

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post('/', async (req, res) => await users.getRoute(req, res));

module.exports = router;
