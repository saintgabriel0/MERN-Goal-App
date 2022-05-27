const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port, () => 
console.log(`Server listening on port ${port}`))