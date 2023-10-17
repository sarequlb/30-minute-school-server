const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000;
const categories = require('./data/courses-category.json')
const courses = require('./data/courses.json')

app.use(cors())

app.get('/', (req,res) =>{
    res.send('School of Programming is running')
})

app.get('/category', (req,res) =>{
    res.send(categories)
})

app.get('/category/:id', (req,res) =>{
    const id = req.params.id;
    const selectedCategory = categories.find(category => category.id === id)
    res.send(selectedCategory)
} )





app.listen(port, () =>{
    console.log(`School of Programming running on ${port}`)
})