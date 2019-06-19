import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from 'src/app/_services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor(private recipeService:RecipeService) { }
  @Input() recipe: Recipe;
  @Input() index:number;
  ngOnInit() {
  }
  
}
