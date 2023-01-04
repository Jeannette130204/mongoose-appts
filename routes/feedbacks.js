const express = require('express')
const { routes } = require('../server')
const router = express.Router()
const feedbacksCtrl = require('../controllers/feedbacks')

router.post('/appointments/:id/feedbacks', feedbacksCtrl.create)
router.get('/feedbacks/:id/edit', feedbacksCtrl.edit)
router.delete('/feedbacks/:id', feedbacksCtrl.delete)
router.get('/:id', feedbacksCtrl.update)
module.exports = router
