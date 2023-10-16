const express = require('express');
const app = express();
const placesRoutes = require('./routes/place-routes/places-routes');

require('dotenv').config();

app.use(express.json());

app.use('/api/places', placesRoutes);

// Middleware for handling incorrect routes
app.use((req, res, next) => {
  const error = new Error('Not found ddddddd');
  error.status = 404;
  next(error);
});

// Error handling middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

const PORT = process.env.PORT || 5000;
const portMessage = `The server is running on port ${PORT}`;
app.listen(PORT, () => {
  console.log(portMessage);
});
