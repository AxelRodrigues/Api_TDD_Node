const routes = require('express').Router();
const {Marcas} = require('./app/models')

Marcas.create({name: 'Ford'})

module.exports = routes;