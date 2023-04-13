
/**Demonstrating an unneccesary two step process for
   * with 'tsnd' don't need to compile => run , can just run. */
  //import express package
  // import * as express from 'express';  star tells typescript that there is no defult properties in the installed package, need the whole package.
  // console.log(express);
  //import express variable to invoke express API.
// -----------------------------------------------

// 'import' statement deprecated OR some other configuration issue. 

//import os from 'express' // for using in script, not in the debug console. 


//'config' is default export, 'PORT' is named export. 
import config, {PORT} from  './config';
console.log(PORT); 

import express from 'express'; 
//import config from './config';

const os = require('node:os');

// console.log(config());
console.log(config);


const server = express();

//Middleware  - a layer so everytime there is a express goes through all layors to determine valid requests and what to do with it. 
server.use(express.static("dist")); // serve any static assets under the 'dist' directory.

//tell Express to use ejs as templating library.
//& configures ejs as the 'view engine' of the project. 
server.set("view engine", "ejs"); // set special string 'view engine' to be 'ejs'.
 
server.use("/", (req,res) => {
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


