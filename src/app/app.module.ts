import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/Dropdown.directive';
import { RecipeService } from './_services/recipe.service';
import { ShoppingListService } from './_services/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { StartrecipeComponent } from './recipes/startrecipe/startrecipe.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      ShoppingListComponent,
      RecipeItemComponent,
      RecipeListComponent,
      RecipeDetailComponent,
      RecipesComponent,
      ShoppingEditComponent,
      DropdownDirective,
      StartrecipeComponent,
      RecipeEditComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      
      
   ],
  providers: [RecipeService,
   ShoppingListService]
  ,
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
