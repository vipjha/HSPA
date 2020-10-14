import { IProperty } from './../property/property-list/IProperty.Interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties():Observable<IProperty[]>{
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<IProperty>=[];
        for(const id in data){
        if(data.hasOwnProperty(id)){
        propertiesArray.push(data[id]);
        }
      }
        return propertiesArray;
      })
    );
  }
}
