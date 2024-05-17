import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  inst: {
    type: String,
    required: true,
  },
  ing1: {
    type: String,
  },
  ing2: {
    type: String,
  },
  ing3: {
    type: String,
  },
  ing4: {
    type: String,
  },
  qnt1: {
    type: String,
  },
  qnt2: {
    type: String,
  },
  qnt3: {
    type: String,
  },
  qnt4: {
    type: String,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

export const Recipe = mongoose.model("recipe", RecipeSchema);
