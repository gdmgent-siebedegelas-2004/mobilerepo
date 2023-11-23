import { Request, Response } from "express";
import Card from "./Card.model";

const getCards = async (req: Request, res: Response) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { getCards };
