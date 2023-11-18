import express, { Request, Response } from "express";
import * as bodyParser from "body-parser";
import fs from "fs";
import { Card } from "./types";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const readCreditCards = (): Card[] => {
  return JSON.parse(fs.readFileSync("data/cards.json", "utf-8"));
};

const writeCards = (cards: Card[]) => {
  fs.writeFileSync("data/cards.json", JSON.stringify(cards));
};

app.get("/cards", (req: Request, res: Response) => {
  const cards: Card[] = readCreditCards();
  res.json(cards);
});

app.get("/cards/:id", (req: Request, res: Response) => {
  const cards: Card[] = readCreditCards();
  const id = req.params.id;
  const card = cards.find((card) => card.id === id);
  if (card) {
    res.json(card);
  } else {
    res.status(404).json({ error: "Credit card not found" });
  }
});

app.post("/cards", (req: Request, res: Response) => {
  const card: Card = {
    image:
      "https://arteveldehogeschool.instructure.com/images/messages/avatar-50.png",
    ...req.body,
  };

  const cards = [...readCreditCards(), card];
  // save to JSON
  writeCards(cards);

  // return added cards
  res.json(card);
});

// PATCH
app.patch("/cards/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const card: Card | undefined = readCreditCards().find(
    (card) => card.id === id
  );

  if (card) {
    const updatedCard = { ...card, ...req.body };
    // update database
    const cards = readCreditCards().map((card) =>
      card.id === id ? updatedCard : card
    );
    writeCards(cards);
    // return updated credit card
    res.json(updatedCard);
  } else {
    res.status(404).json({ error: "Credit card not found" });
  }
});

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});
