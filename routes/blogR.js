const express = require('express')

// destructuring 
const { Posting, Getting, GetId, UpdateId, DeleteId } = require('../controller/blogController');

const routers = express.Router();

routers.post('/posted', Posting);
routers.get('/getting', Getting);
routers.get('/getId/:_id', GetId);
routers.put('/update/:id', UpdateId);
routers.delete('/delete/:id', DeleteId)

module.exports = routers;