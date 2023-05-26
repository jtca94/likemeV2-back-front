import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import {pool} from "./db/database.js";
import routes from "./routes/routes.js";

const app = express();
// Middleware
app.use(express.json());
// CORS
app.use(
  cors()
);
//ROUTES
app.use("/", routes);

// Error handling middleware at the end of pipeline (after routes)
app.use((err, req, res, next) => {
  console.error(err);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({ok: false, error: err.message});
});

// Start server and check connection with database

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  pool.connect((err) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      process.exit(1);
    }
    console.log("Database connected successfully!");
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
