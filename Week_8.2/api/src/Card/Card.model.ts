import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    uid: {
      type: String,
      required: true,
    },
    credit_card_number: {
      type: String,
      required: true,
    },
    credit_card_expiry_date: {
      type: Date,
      required: true,
    },
    credit_card_type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Card = mongoose.model("Card", cardSchema);

export default Card;
