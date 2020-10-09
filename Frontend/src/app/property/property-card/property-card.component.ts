import { Component } from '@angular/core';

@Component({
  selector:'app-property-card',
  //template:'<h1>As a card<h1>',
  templateUrl:'property-card.component.html',
  styleUrls:['property-card.component.css']

})

export class PropertyCardComponent{

  Property:any={
    "Id":1,
    "Name":"My House",
    "Type":"House",
    "Price":120000
  }

}
