const express = require('express');
const router = express.Router();

//Routes
router.get('/', (req,res) =>{
    res.render('index');
});

router.get('/about', (req,res) =>{
    res.render('about');
})
// router.get('', (req, res) =>{
// res.send('Hello world');
// })

module.exports = router;