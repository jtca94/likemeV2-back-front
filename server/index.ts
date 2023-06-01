import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import {pool} from "./db/database";
import routes from "./routes/routes";

const app = express();
// Middleware
app.use(express.json());
// CORS
app.use(
  cors()
);
//ROUTES
app.use("/", routes);


// Start server and check connection with database

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  pool.connect((err: any) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      process.exit(1);
    }
    console.log("Database connected successfully!");
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
