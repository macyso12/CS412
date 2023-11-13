const express = require ("express");
const app = express();
const bodyParser = require("body-parser");
const https = require("https")
app.use(bodyParser.urlencoded({extended: true}));
const axios = require('axios');
const request = require('request-promise');
const path = require('path');

//new 
app.use(bodyParser.json());

app.get("/", function(req, res){
    res.sendFile(__dirname + "/page.html")
})

// POST method
app.post("/",function(req,res){
    const cityName = req.body.cityName
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName +"&appid=49714856607f1addeeb0d101ff660dfe&units=metric"
    https.get(url, function(response){
        response.on("data", function(data){
            const jsondata = JSON.parse(data)
            const temp = jsondata.main.temp
            const des = jsondata.weather[0].description
            const icon = jsondata.weather[0].icon
            const imageurl = "https://openweathermap.org/img/wn/"+icon+"@2x.png"
            res.write("<h1> The temp in " + cityName + " is " + temp + " degree celcius</h1>");
            res.write("<p> The weather description is " + des + "</p>");
            res.write("<img src=" +imageurl + ">");
            res.write("<button onclick=history.back()> Go Back </button>")
            res.send();
        })
    })
})

app.post('/promise', (req, res) => {
    // Extract parameters from the request body
    const city = req.body.cityName;
  
    // Check if required parameters are provided
    if (!city ) {
      return res.status(400).json({ error: 'City are required' });
    }
  
    // Define the external API URL (replace with the actual API endpoint)
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=49714856607f1addeeb0d101ff660dfe&units=metric`;
  
    // Wrap the request in a Promise
    const makeRequest = new Promise((resolve, reject) => {
      request.post(apiUrl, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          resolve(body);
        }
      });
    });
  
    // Handle the Promise
    makeRequest
      .then(data => {
      // Parse and send the data
      const weatherData = JSON.parse(data);
      //res.json(weatherData);
      const temp = weatherData.main.temp
      const des = weatherData.weather[0].description
      const icon = weatherData.weather[0].icon
      const imageurl = "https://openweathermap.org/img/wn/"+icon+"@2x.png"
      res.write("<h1> The temp in " + city + " is " + temp + " degree celcius</h1>");
      res.write("<p> The weather description is " + des + "</p>");
      res.write("<img src=" +imageurl + ">");
      res.write("<button onclick=history.back()> Go Back </button>")
      res.send()
      })
      .catch(error => {
        // Handle errors
        console.error('Error retrieving weather data:', error);
        res.status(500).json({ error: 'Error retrieving weather data' });
      });
  });

//async & awaits
app.post('/getWeather', async (req, res) => {
    // Extract parameters from the request body
    const city = req.body.cityName;
  
    // Check if required parameters are provided
    if (!city) {
      return res.status(400).json({ error: 'City and API key are required' });
    }
  
    // Define the external API URL (replace with the actual API endpoint)
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=49714856607f1addeeb0d101ff660dfe&units=metric`;
  
    try {
      // Make the POST request using node-fetch with async/await
      const response = await fetch(apiUrl, { method: 'POST' });
  
      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        // Parse and send the data
        const weatherData = await response.json();
        const temp = weatherData.main.temp
        const des = weatherData.weather[0].description
        const icon = weatherData.weather[0].icon
        const imageurl = "https://openweathermap.org/img/wn/"+icon+"@2x.png"
        res.write("<h1> The temp in " + city + " is " + temp + " degree celcius</h1>");
        res.write("<p> The weather description is " + des + "</p>");
        res.write("<img src=" +imageurl + ">");
        res.write("<button onclick=history.back()> Go Back </button>")
        res.send()
      } else {
        // Handle non-successful status codes
        console.error(`Error retrieving weather data: ${response.statusText}`);
        res.status(500).json({ error: 'Error retrieving weather data' });
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error retrieving weather data:', error);
      res.status(500).json({ error: 'Error retrieving weather data' });
    }
  });

//CallBack Method
app.post('/callBack', (req, res) => {
    // Extract parameters from the request body
    const city = req.body.cityName;
  
    // Check if required parameters are provided
    if (!city ) {
      return res.status(400).json({ error: 'City are required' });
    }
  
    // Define the external API URL (replace with the actual API endpoint)
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=49714856607f1addeeb0d101ff660dfe&units=metric`;

    // Make the POST request using axios with a callback
    axios.post(apiUrl)
      .then(response => {
        // Parse and send the data
        const weatherData = response.data;
        //res.json(weatherData);
        const temp = weatherData.main.temp
        const des = weatherData.weather[0].description
        const icon = weatherData.weather[0].icon
        const imageurl = "https://openweathermap.org/img/wn/"+icon+"@2x.png"
        res.write("<h1> The temp in " + city + " is " + temp + " degree celcius</h1>");
        res.write("<p> The weather description is " + des + "</p>");
        res.write("<img src=" +imageurl + ">");
        res.write("<button onclick=history.back()> Go Back </button>")
        res.send()
      })
      .catch(error => {
        // Handle errors
        console.error('Error retrieving weather data:', error);
        res.status(500).json({ error: 'Error retrieving weather data' });
      });
  });
  

app.listen(3000)