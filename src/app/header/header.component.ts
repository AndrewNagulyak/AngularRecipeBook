import { Component, Output, EventEmitter, Input } from "@angular/core";


@Component(
{
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
@Output() FSelected = new EventEmitter<string>();
@Input() prope ='2' ;
OnSelect(feature:string)
{
    this.FSelected.emit(feature);
}

}