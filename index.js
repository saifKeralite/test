//Global
const express = require('express')
const app = express();
const axios = require('axios');
const cors = require('cors')
const dotenv = require('dotenv'); // to use enviorment variables
const port = 8080 //Port
const path = require('path')
dotenv.config();



// ********************************************
// ********************************************
app.use('/static', express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});


// ********************************************
// ********************************************
//Custom API for the client
// ********************************************
// ********************************************


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${process.env.API_KEY}`)
})