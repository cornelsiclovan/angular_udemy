import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
               'A super-tasty Schnitzel - juse awsome',
               'https://www.thespruceeats.com/thmb/cckc3_4QUQ79kSFhcLPM8xg9F3g=/3797x2848/smart/filters:no_upscale()/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg',
               [
                 new Ingredient('Meat', 1),
                 new Ingredient('French Fries', 20)
               ]),
    new Recipe('Big Fat Burger',
               'What else you need to say?',
               'https://thumbs.dreamstime.com/b/big-tasty-burger-restaurant-menu-big-tasty-burger-restaurant-menu-177051547.jpg',
               [
                 new Ingredient('Buns', 2),
                 new Ingredient('Meat', 1)
               ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); //returns a copy of the array
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
