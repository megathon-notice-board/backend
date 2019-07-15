const express = require('express')
const app = express()

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// get all Category
app.get('/category', (req, res) => {
    res.status(200).send({
      success: 'true',
      message: 'todos retrieved successfully',
      todos: 'db'
    })
});

// post all Category
app.post('/category', (req, res) => {
    console.log(req.body.hi)
    res.status(200).send({
      success: 'Below is the Request',
      dataReceived: req.body
    })
});

const PORT = 3000
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});