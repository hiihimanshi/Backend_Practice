// Import the http module
const http = require('http');

// Define the server port
const PORT = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send a response
  res.end('Hello, this is a simple HTTP server in Node.js!\n');
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});




























/ // require('dotenv').config()
// // const express = require('express')
// // const app = express()
// // const port = process.env.port

// // app.get('/', (req,res) => {
// //     res.send('Hello world')
// // })
// // app.get('/x',(req,res) => {
// //     res.send('hiihimanshi')
// // })
// // app.get('/signin',(req,res) => {
// //     res.send('Enter your email')
// // })
// // app.listen(port,() => {
// //     console.log(`app listening on port ${port}`)
// // })

// const express = require('express')
// const app = express()
// const port = process.env.port

// app.use((req, res, next) => {
//   console.log('Time:', Date.now())
//   next()
// })