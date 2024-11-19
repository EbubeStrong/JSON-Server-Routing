// Using of Express Js  using try and catch method to create a server and handle different routes

import { createServer } from 'http'
import express from 'express'

const app = express()
app.use(express.json())

const server = createServer(app)

try{
    app.get('/success', (req, res) => { 
        res.status(202).json({ message: 'This page is Successful' })
    })
}
catch(err){
    console.log(err)
}

try {
    app.get("/error", (req, res) => {
      res
        .status(500)
        .json({ message: "Something went wrong, try another route." });
    });

} catch (error) {
    console.log(error);
}

try {
    app.get((req, res) => {
        res.status(404).json({ message: 'Not Found' })
    })
} catch (error) { 
    console.log(error);
}



server.listen(3000, () => { 
    console.log('Server is running on port 3000')
})