import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../_services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  
  constructor(private shoppingService:ShoppingListService) { }
  ingredients:Ingredient[];
  ngOnInit() {
 this.ingredients = this.shoppingService.getIngredients(); 
 this.shoppingService.ingredientsChanged.subscribe((ingred:Ingredient[])=> {
   this.ingredients=ingred;
 })
  } 
 
}
