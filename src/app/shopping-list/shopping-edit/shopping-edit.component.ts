import { Component, OnInit, ViewChild, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/_services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') name :ElementRef; 
@ViewChild('amountInput') amount :ElementRef; 

@Input() ingradients ;
  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() {
  }
  // tslint:disable-next-line:member-ordering
 
  OnAdd()
  {
    const ing =new Ingredient(this.name.nativeElement.value,this.amount.nativeElement.value);
    console.log(ing);
    this.shoppingService.Add(ing);
  }
}
