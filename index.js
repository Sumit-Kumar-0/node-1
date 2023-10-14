const express = require('express');
const app = express();

require('dotenv').config();






const PORT = process.env.PORT || 5000;
const portMessege = `The server is running on port ${PORT}`
app.listen(PORT, () => {
    console.log(portMessege);
});