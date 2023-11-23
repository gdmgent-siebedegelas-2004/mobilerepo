import { Express } from "express";
import { getCards } from "../modules/Card.controller";

const registerRoutes = (app: Express) => {
  app.get("/cards", getCards);
};

export { registerRoutes };
