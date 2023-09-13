import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes : Recipe[] = [
    {
      id : "1",
      title : "Bread",
      imageUrl : "assets/img/bread.png",
      ingredients : ["Flour", "Sugar", "Milk"]
    },
    {
      id : "2",
      title : "Beans",
      imageUrl : "assets/img/beans.png",
      ingredients : ["Beans", "Water"]
    }
  ]
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId : string){
    return {
      ...this.recipes.find(recipe => { 
        return recipe.id === recipeId
      })
    };
  }

  deleteRecipe(recipeId : string){
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId)
  }
}
