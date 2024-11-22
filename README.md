HTTP Status Codes and JSON Responses:
Project Overview:
This project demonstrates how to create an HTTP server using Express.js that returns JSON data with various HTTP status codes. It includes routes that return success, error, and "not found" responses with appropriate status codes. The server is built using Express.js, and the raw http module is included but ignored in version control (.gitignore).

Features
Routes with HTTP Status Codes:
200 OK: Success responses
400 Bad Request: Error responses for invalid data
404 Not Found: Return a "Page not found" message when the route does not exist

JSON Responses:
Each route returns a JSON response with a status message indicating the outcome of the request.

Getting Started
Prerequisites
Node.js: Make sure you have Node.js installed. You can download it from https://nodejs.org.
Express.js: This project uses Express.js, which can be installed via npm.

Installation
Clone this repository to your local machine:
git clone <repository-url>
cd <project-folder>

Install the required dependencies:
npm install

Project Structure
index.js: Main entry point for the server using Express.js.
.gitignore: The http module code is ignored here as it is not needed for version control.
package.json: Contains project metadata and dependencies.

Running the Server
To run the server, use the following command:
npm start
This will run the server using nodemon (if installed globally or locally), which automatically restarts the server on code changes.

API Endpoints
GET /success
Response:
json
{ "status": "success", "message": "Welcome to the home page!" }

GET /error
Response (400 Bad Request):
json
{ "status": "error", "message": "Bad request. Something went wrong." }

GET /
Response (404 Not Found):
json
{ "status": "error", "message": "Page not found" }

.gitignore
The http module implementation is excluded from version control to prevent unnecessary files from being tracked. You can add additional files to .gitignore as needed.

# .gitignore
node_modules/
http/
Comments on Status Codes
200 OK: Indicates that the request has succeeded. The response body will contain the data requested, or a message indicating that the operation was successful.
400 Bad Request: This status code indicates that the server could not process the request due to a client error. This may be due to invalid data or a malformed request.
404 Not Found: This code is used when the requested route or resource could not be found on the server. It is important to provide a meaningful response, such as a "Page not found" message.
Code Snippet: Using Express.js and HTTP Status Codes

Contribution
If you'd like to contribute to this project, feel free to fork the repository and submit pull requests. Please make sure to follow the project structure and adhere to the conventions used in the code.
