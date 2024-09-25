//URL https://www.youtube.com/watch?v=ZmJ05fRvCWg
require('dotenv').config();
const express = require('express');
//const mongoose = require('mongoose');
//const nodemon = require('nodemon');
const exportLayout = require('express-ejs-layouts');

const connectDB = require('./server/config/db');


const app = express();
const PORT = 5000 || process.env.PORT;

connectDB();

app.use(express.static('public'));


//Templating Engine
app.use(exportLayout);
app.set('layout','./layouts/main')
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main'))
//app.use('/next', require('./server/routes/main2'))

// app.get('/', (req,res) => {
//     res.render('index')
// }
// )

app.listen(PORT, () =>{
    console.log(`App listening on port ${PORT}`)
});
