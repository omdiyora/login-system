const express = require('express');

const router  =  express.Router();

router.use('/auth',require('./adminRoutes'))

module.exports = router