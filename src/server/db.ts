// Create a client object for the server
//import { MongoClient } from "mongodb";
const MongoClient = require('mongodb').MongoClient; // used require() as alternative to 'import' statement. 
import { MONGODB_URI, DATABASE_NAME } from "./config";

let connectedClient; // cached version - to prevent duplicate calls to the 
 

// async - meaning the function needs to do a network request from the database. 
export const connectClient = async () => {
  
  //Check to see if a cached version exists. If it does, then use the already cached version. 
  if(connectedClient) {
    return connectedClient.db(DATABASE_NAME);
  }
  
  const client = new MongoClient(MONGODB_URI);

  // connect the client to database.
  await client.connect(); // async call - need to define a function to do this?
  await client.db(DATABASE_NAME).command({ping: 1});
  console.info("Connected to MongoDB");
  connectedClient = client;


  //return client.db(DATABASE_NAME);
  return connectedClient.db(DATABASE_NAME);
}//

export const stopClient = async () => {
  await connectedClient?.close();
}


