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

const createCards = async (req: Request, res: Response) => {
  try {
    const client = new Card(req.body);
    const result = await client.save();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const patchCards = async (req: Request, res: Response) => {
  const id = req.params.id;
  const updates = req.body;
  try {
    const updatedCard = await Card.findByIdAndUpdate(id, updates, {
      new: true,
    });
    res.json(updatedCard);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteCards = async (req: Request, res: Response) => {};

export { getCards, patchCards, deleteCards, createCards };
