// Using of http module to to create a server and handle different routes

import { createServer } from 'http'
import url from 'url'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT

const server = createServer((req, res) => {
  // Parsing of the URL to get the pathname
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  try {
    if (pathname === "/success") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "This page is Successful" }));
    } else if (pathname === "/error") {
      res.writeHead(500, {
        "Content-Type": "application/json",
      });
      res.end(
        JSON.stringify({
          message: "Something went wrong, try another route.",
        })
      );
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Not Found" }));
    }
  } catch (error) {
    // Returning a 500 response for handling unexpected errors
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Internal Server Error" }));
    console.error("An error occured:", error.message);
    console.error("An error occured:", error.message);
  }
})

server.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
})