import { IProperty } from './IProperty.Interface';
import { HousingService } from './../../services/housing.service';
//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<IProperty>;

  constructor(private housingService: HousingService) { }

  ngOnInit(): void {

    this.housingService.getAllProperties().subscribe(
      data => {
        this.properties = data;
        console.log(data);
      }, error=>{
        console.log('httperror:');
        console.log(error);
      }
    )

    //   this.http.get('data/properties.json').subscribe(
    //     data=>{
    //       this.properties=data;
    //       console.log(data);
    //     }
    //   );
  }

}
