var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ande' });
});

router.get('/profile', function(req, res, next) {
  res.render("profile",
    {nama:"Ande", npm:2125240087}
  );
});

module.exports = router;
