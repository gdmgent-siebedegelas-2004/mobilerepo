import "dotenv/config";
import mongoose from "mongoose";
import app from "./app";
import { Server } from "http";

const port: number = parseInt(process.env.PORT ?? "3002");

// connectie maken met de database
// in mongoDB zet je je ip connectie aan
if (process.env.MONGO_CONNECTION) {
  mongoose
    .connect(process.env.MONGO_CONNECTION)
    .then(() => {
      console.log("Connected to database");

      // setup server
      const server = app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
      });

      process.on("SIGINT", () => stopServer(server));
      process.on("SIGTERM", () => stopServer(server));
    })
    .catch((error) => {
      console.log("Error connecting to database: ", error);
    });
} else {
  throw new Error("No connection string");
}

const stopServer = (server: Server) => {
  mongoose.connection.close();
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
};
