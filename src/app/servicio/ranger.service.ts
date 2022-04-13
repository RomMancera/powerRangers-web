import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RangerModel } from '../ModelRanger/ranger.model';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RangerService {
    
  private url = 'https://crudrangers-ab388-default-rtdb.firebaseio.com';
   
  constructor(private http: HttpClient) { }

  getRangers(){
    return this.http.get(`${this.url}/Rangers.json`)
    .pipe(
      map(this.createArreglo)
      
    );
  
  }
  
  private createArreglo(ranger :RangerModel){
    const rangers : RangerModel[] = [];
    console.log(ranger);
    if (ranger === null){
      return [];
    } 
 
   Object.keys( ranger ).forEach(
     key => {
       const Rangers : RangerModel = ranger[key];
       Rangers.id = key;
       rangers.push(Rangers);
     }
   );
  
 console.log(rangers);
 return rangers;
   }

  crearRanger(ranger : RangerModel){
    return this.http.post(`${this.url}/Rangers.json`, ranger)
    .pipe(
      map(
        (respuesta : any) =>{
          ranger.id = respuesta.name;
          return ranger;
        }
      )
    );
   }

   editarRanger(ranger : RangerModel){
    const rangeTemporal ={
     ...ranger
    };
   delete rangeTemporal.id;

    return this.http.put(`${this.url}/Rangers/${ranger.id}.json`, rangeTemporal);
  }

  obtenerRanger(id:string){
    return this.http.get(`${this.url}/Rangers/${id}.json`);
     }

  borrarRanger(id : string){
      return this.http.delete(`${this.url}/Rangers/${id}.json`);
    }
  

}

