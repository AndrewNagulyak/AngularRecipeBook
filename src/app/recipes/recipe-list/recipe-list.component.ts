import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/_services/recipe.service';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

 recipes: Recipe[];
 id:number;
  constructor(private recipeService: RecipeService, private router: Router, private route:ActivatedRoute) { }
 
  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
    
  }
  OnNewRecipe()
  {
    this.router.navigate(['new'],{relativeTo:this.route});

  }
}
