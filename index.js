const express = require('express');
const app = express();
const placesRoutes = require('./routes/place-routes/places-routes');
const notFoundErrorHandler = require('./models/error-handlers/not-found');

require('dotenv').config();

app.use(express.json());

app.use('/api/places', placesRoutes);

app.get('*', notFoundErrorHandler);

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const status = error.status || 'error';
  const message = error.message || 'Internal Server Error';

  res.status(statusCode).json({
    status,
    message,
  });
});

const PORT = process.env.PORT || 5000;
const portMessage = `The server is running on port ${PORT}`;
app.listen(PORT, () => {
  console.log(portMessage);
});
