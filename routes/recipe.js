import express from 'express'
import { add, getAllRecipe, getRecipeById, getRecipeByUserId, getSavedRecipe, savedRecipeById } from '../controllers/recipe.js';

import { Authenticate } from '../middleware/auth.js';

const router = express.Router();

// create recipe
router.post('/add' , Authenticate , add)

// get all recipe
router.get("/" , getAllRecipe)

// get all saved recipe
router.get('/saved' , getSavedRecipe)

// get recipe by id
router.get('/:id' , getRecipeById)


// get recipe by user id
router.get('/user/:id' , getRecipeByUserId)


// saved recipe by Id
router.post('/:id' , Authenticate , savedRecipeById)


export default router;