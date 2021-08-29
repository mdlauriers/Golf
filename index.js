/**
 * 
 * File: index.js
 * Author: Mathieu Des Lauriers
 * 
 */

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Test at http://localhost:${port}`)
})