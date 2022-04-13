import { Pipe, PipeTransform } from '@angular/core';
import { RangerComponent } from '../componentes/ranger/ranger.component';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(imagen : any): string {

    if(imagen){
      return `${imagen}`
    } else{
      return '../assets/noposter.png';
    }
    
    return null;
  }

}
