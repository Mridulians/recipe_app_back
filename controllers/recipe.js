import { Recipe } from "../Models/RecipeModel.js";
import { SavedRecipe } from "../Models/SavedRecipe.js";

export const add = async (req, res) => {
  const {
    title,
    inst,
    ing1,
    ing2,
    ing3,
    ing4,
    qnt1,
    qnt2,
    qnt3,
    qnt4,
    imgUrl,
  } = req.body;

  try {
    const recipe = await Recipe.create({
      title,
      inst,
      ing1,
      ing2,
      ing3,
      ing4,
      qnt1,
      qnt2,
      qnt3,
      qnt4,
      imgUrl,
      user: req.user,
    });

    res.json({ message: "Recipe created successfully...", recipe });
  } catch (error) {
    res.json({ message: error });
  }
};


export const getAllRecipe = async (req, res) => {
  const recipes = await Recipe.find();

  res.json({ recipes });
};



export const getRecipeById = async (req, res) => {
  const id = req.params.id;

  try {
    let recipe = await Recipe.findById(id);

    if (!recipe) return res.json({ message: "Recipe Not Found" });

    res.json({ message: "Recipe by Id ... ", recipe });
  } catch (error) {
    res.json({ message: error });
  }
};



export const getRecipeByUserId = async (req, res) => {
  const userId = req.params.id;

  try {
    let recipe = await Recipe.find({ user: userId });

    if (!recipe) return res.json({ message: "User Recipe not found...." });

    res.json({ message: "Recipe by user Id ....", recipe });
  } catch (error) {
    res.json({ message: error });
  }
};



export const savedRecipeById = async (req, res) => {
  const id = req.params.id;

  let recipe = await SavedRecipe.findOne({ recipe: id });

  if (recipe) return res.json({ message: "Recipe already saved ....." });

  recipe = await SavedRecipe.create({ recipe: id });

  res.json({ message: "recipe saved successfully ...." });
};



export const getSavedRecipe = async (req, res) => {
  const recipe = await SavedRecipe.find();

  res.json({ recipe });
};
