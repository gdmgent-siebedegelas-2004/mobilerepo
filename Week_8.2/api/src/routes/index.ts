import { Express } from "express";
import cardRoutes from "../Card/Card.routes";

const registerRoutes = (app: Express) => {
  app.use("/", cardRoutes);
};

export { registerRoutes };
