//console.log("Config...");
// export default () => ({ // default export
//   test: true, 
// });

const env = process.env; // env_ironment variable. 


export const PORT = env.PORT ?? "8080"; // named export
export const HOST = env.HOST ?? "localhost";
export const SERVER_URL = `http://${HOST}:${PORT}`;

//get mongoDB server URI from the client program MongoDB Compass, to connect to the database in mongoDB app. 
export const MONGODB_URI  = env.MONGODB_URI ?? "mongodb://localhost:27017";
//now using the local directory created in the MongoDB database. 
export const DATABASE_NAME = env.DATABASE_NAME ?? "local";

export default {
  PORT,
  HOST,
  SERVER_URL
}

