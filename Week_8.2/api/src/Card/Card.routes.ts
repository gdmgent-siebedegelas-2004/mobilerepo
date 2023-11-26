import express from "express";
import { getCards } from "./Card.controller";

const router = express.Router();

router.get("/cards", getCards);

export default router;
