const express = require('express');

const dbModels = require('../../../database/models/');
const Users = require('../models/Users');

const router = express.Router();
const users = new Users(dbModels);

router.get('/', users.getRoute.bind(users));

module.exports = router;