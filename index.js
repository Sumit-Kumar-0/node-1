const express = require('express');
const app = express();
const placesRoutes = require('./routes/place-routes/places-routes');

require('dotenv').config();

app.use('/api/places', placesRoutes)




const PORT = process.env.PORT || 5000;
const portMessege = `The server is running on port ${PORT}`
app.listen(PORT, () => {
    console.log(portMessege);
});