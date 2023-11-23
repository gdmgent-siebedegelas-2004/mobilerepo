import "dotenv/config";
import mongoose, { Expression } from "mongoose";
import express, { Request, Response, Express } from "express";
import fs from "fs";
import { Card } from "./types";
import { registerRoutes } from "./routes";
import { registerMiddleware } from "./middleware";
const app: Express = express();
const port: number = parseInt(process.env.PORT ?? "3002");

// connectie maken met de database
// in mongoDB zet je je ip connectie aan
if (process.env.MONGO_CONNECTION) {
  mongoose
    .connect(process.env.MONGO_CONNECTION)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.log("Error connecting to database: ", error);
    });
} else {
  throw new Error("No connection string");
}
// register middleware
registerMiddleware(app);

// register routes van app "../routes/index.ts"
registerRoutes(app);

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
    credit_card_type: "vbucks",
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

// setup server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
