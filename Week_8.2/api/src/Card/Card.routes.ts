import express from "express";
import {
  createCards,
  patchCards,
  deleteCards,
  getCards,
} from "./Card.controller";

const router = express.Router();

router.get("/cards", getCards);
router.post("/cards", createCards);
router.patch("/cards", patchCards);
router.delete("/cards", deleteCards);

export default router;
