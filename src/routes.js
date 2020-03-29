const express = require('express')
const routes = express.Router()

// controllers
const SessionController = require('./controllers/SessionController')
const OngController = require('./controllers/OngController')
const ProfileController = require('./controllers/ProfileController')
const IncidentController = require('./controllers/IncidentController')

//login
routes.post('/sessions', SessionController.create)

// ongs
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

// profile
routes.get('/profile', ProfileController.index)

// incidents
routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes