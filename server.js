const express = require('express')
const app =express()
const axios = require('axios')


app.set("view engine","ejs")
app.use(express.static('Public'))

app.get("/",(req,res)=>{
    res.render("index",{weather:null,error:null})
})
app.get("/weather", async (req,res)=>{
    const city = req.query.city;
    const apikay = 'c9b64ec82a27db45d693fbeb45340869'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&
  units=imperial&appid=${apikay}`;
let weather;
let error= null
  try {
    const response = await axios.get(apiUrl)
    weather= response.data;
  } catch (error) {
    weather = null;
    error = 'Error, Please try again'
  }

    res.render("index",{weather,error})
})




app.listen(4000 , ()=>{
    console.log("Server is running on port 4000")
})