import { IProperty } from './../property-list/IProperty.Interface';
import { Component, Input } from '@angular/core';

@Component({
  selector:'app-property-card',
  //template:'<h1>As a card<h1>',
  templateUrl:'property-card.component.html',
  styleUrls:['property-card.component.css']

})

export class PropertyCardComponent{

  @Input() property:IProperty

}
