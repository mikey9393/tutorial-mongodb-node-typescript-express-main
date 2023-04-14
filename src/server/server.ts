

import config, {PORT} from  './config';
console.log(PORT); 

import express from 'express'; 


import apiRouter from './api-router';

const os = require('node:os');

// console.log(config());
console.log(config);


const server = express();


//Middleware 
server.use(express.static("dist")); // serve any static assets under the 'dist' directory.

//tell Express to use ejs as templating library.
//& configures ejs as the 'view engine' of the project. 
server.set("view engine", "ejs"); // set special string 'view engine' to be 'ejs'.

server.use("/api", apiRouter); // So all endpoints in 'api-router' will be prefixed with '/api' 

//Root HTTP Call w/getter so clientside can only get.
server.get("/", (req,res) => {
  res.render("index", {
    initialContent: "Loading..." // '<%=' won't render HTML, use '<%-' instead. 
  }); // give the name of the templating file to look for. 
  // res.send("Hello from Express"); // Displays text, not HTML in browser. 
});

server.listen(config.PORT, config.HOST, ()=>{
  console.info(
    `Express server is listening at ${config.SERVER_URL} \n`,
    `Free Mem: ${os.freemem() / 1024 / 1024}`
  )
})
// server.listen("8080", "localhost", () => {
//   console.info(
//     "Express server is listening at http://localhost:8080",
//     ``
//   );
// })


