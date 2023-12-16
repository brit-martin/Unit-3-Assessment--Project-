import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

let app = express();

app.use(express.json())

let db= [];

app.get('/', (req, res) => {
    res.sendFile(join(dirname(fileURLToPath(import.meta.url)), '/public/index.html')) 
})

app.get('/css', (req, res) => {
    res.sendFile(join(dirname(fileURLToPath(import.meta.url)), '/public/styles.css')) 
})

app.get('/js', (req, res) => {
    res.sendFile(join(dirname(fileURLToPath(import.meta.url)), '/public/main.js')) 
})


app.post('/add-item', (req, res) => {
   db.push(req.body)
   res.status(200).send(db)  
})


app.listen(8000, () => {
    console.log('we have started the server on port 8000')
})

