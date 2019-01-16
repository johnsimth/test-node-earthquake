const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// all the earthquake happened/Magnitude/Time/Felt/Sources/Longitude/Latitude/Depth
const getFeed = (res) => {
    // var path;
    axios
    .get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson')
    .then((response) => {
        const apiData = response.data.features; 
        // console.log()
        const ddd = apiData.map(i_data => ({
             magnitude: i_data.properties.mag,
             time: i_data.properties.time,
             felt: i_data.properties.felt,
             sources: i_data.properties.sources,
             longitude: i_data.geometry.coordinates[0],
             latitude: i_data.geometry.coordinates[1],
             depth: i_data.geometry.coordinates[2]
        }))
        // console.log(ddd);
        res.send(ddd);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

app.get('/api/getData',(req, res)=> {
    getFeed(res);
});
app.get('*');
app.listen(3003, () => console.log('server is runnig!'));
