const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next) {
    res.render('index', {title: 'Feedback app', author: 'Clara'})
})

router.get('/feedback-form', function(req, res, next){
    res.render('student_feedback_form')
})

router.post('/submit-feedback', function(req, res, next){
    const formData = req.body
    
    let message = formData.comments

    return res.render('thank_you', { ...formData })

    // TODO save and send the message to the relevant departments 
})

module.exports = router





