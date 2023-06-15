const express = require('express'); 
const app = express(); 
const { MongoClient } = require('mongodb'); 
var ObjectId = require('mongodb').ObjectId;
const bodyParser = require('body-parser'); 

app.use(bodyParser()); 
app.set('view engine', 'ejs'); 







app.get('/', async function (req, res) {
    try { 
        res.render('index.ejs')
    } catch (e) {
        console.log(e)
    }
})






app.listen('3000', function () {
    console.log('server up and running....')
})
