import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  constructor() { }
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  Add(ingradient:Ingredient)
  {
    this.ingredients.push(ingradient)
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  private ingredients: Ingredient[] = [new Ingredient('Tomato',2)];

  getIngredients()
  {
    return this.ingredients.slice();
  }
  AddIngredients(ingredients: Ingredient[])
  {
      this.ingredients.push(...ingredients);
      this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
