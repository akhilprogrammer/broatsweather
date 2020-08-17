const path = require('path');
const express = require('express');
const getWeather = require('./getweather');

const app = express();

const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

app.get('/getWeather', (req, res) => {
    getWeather(req.query.location, (data) => {
        res.send(data);
    });
});

app.listen(port); 
