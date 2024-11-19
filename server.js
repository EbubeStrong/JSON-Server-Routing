// Using of http module to to create a server and handle different routes

import { createServer } from 'http'
import url from 'url'
const PORT = 8000

const server = createServer((req, res) => { 
    try {
        if(req.url === '/success') { 
            res.writeHead(202, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'This page is Successful' }))
        }
        else if(req.url === '/error' ){
            res.writeHead(500, {
                'Content-Type': 'application/json'
            })
            res.end(JSON.stringify({
                message: 'Something went wrong, try another route.'
            }))
        }
        else {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Not Found' }))
        }
    } catch (error) {
        throw new Error('Method not allowed')
        console.log(error)
    }
})

server.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
})