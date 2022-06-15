const express = require('express');
const router = express.Router();

const routerAll=require('./blogR')

router.use('/blogs', routerAll)

module.exports = router;