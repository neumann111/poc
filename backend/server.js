// Import the Express framework to create the web server
import express from "express";

// Import dotenv to load environment variables from the .env file
import dotenv from "dotenv";

// Load environment variables into process.env
dotenv.config();

// Set the server port:
// - Use the PORT value from the .env file if available.
// - Otherwise, default to port 5000.
const PORT = process.env.PORT || 5000;

// Create an Express application instance.
//
// Think of "app" as the main server object that controls:
// - Routes
// - Middleware
// - Request handling
// - Response sending
const app = express();


// Define a route for the root URL ("/")
app.get("/", (req, res) => {
  // Send "Hello World!" as the response to the client
  res.send("Hello World!");
});

/*
|--------------------------------------------------------------------------
| Start Server
|--------------------------------------------------------------------------
|
| app.listen() creates an HTTP server and starts
| listening for incoming requests on the specified port.
|
| Example:
| If PORT = 5000
|
| Browser Request:
| http://localhost:5000/api/users/register
|
| Request Flow:
|
| Client
|   ↓
| Express Server
|   ↓
| Middleware (express.json)
|   ↓
| Route (/api/users)
|   ↓
| Controller Logic
|   ↓
| Database
|   ↓
| Response Sent Back
|
*/

// Start the server and listen for incoming requests on the specified PORT
app.listen(PORT, () => {
  // Log a message to the console when the server starts successfully
  console.log(`Server started at port ${PORT}`);
});