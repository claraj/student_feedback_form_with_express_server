var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Student Feedback Form' });
});


/* POST feedback form - save feedback */
router.post('/feedback', function(req, res, next) {
  const formData = req.body
  console.log(formData)
  // TODO save data somewhere, for example, in a database
})


module.exports = router;
