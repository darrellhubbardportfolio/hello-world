import dotenv from "dotenv";
dotenv.config();

import express from "express";

// setup middleware and routes
const app = express();

// middleware

const PORT = process.env.PORT || 3000;
// server
app.listen(PORT, ()=> {console.log("Server is running on port: ", PORT);});