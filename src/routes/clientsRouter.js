
const clientCont = require ('../controller/clientsController');

const express = require ('express');

const route = express.Router();

route.get('/clients', clientCont.getclients);

route.get('/client', clientCont.getClient);

route.post('/signUp', clientCont.postedClient);

route.delete('./delete', clientCont.deleteClient);

module.export = route;