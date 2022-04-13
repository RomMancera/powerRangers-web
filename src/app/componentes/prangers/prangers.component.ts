import { Component, OnInit } from '@angular/core';
import { RangerModel } from 'src/app/ModelRanger/ranger.model';
import { RangerService } from 'src/app/servicio/ranger.service';

//ALERTAS
import Swal from "sweetalert2";

@Component({
  selector: 'app-prangers',
  templateUrl: './prangers.component.html',
  styleUrls: ['./prangers.component.css']
})
export class PrangersComponent implements OnInit {

  Rangers : RangerModel[]=[];
  color : any ; 
  constructor( private rangerS : RangerService) { }

  ngOnInit(): void {

    this.rangerS.getRangers().subscribe
    ((ranger: any)=>{
      this.Rangers = ranger
      console.log(this.Rangers)
    })

  }

  borrarRange(range : RangerModel, i : number){

    Swal.fire({
      title: `¿Seguro que quiere borrar a ${range.nombre}?`,
      text: "No podras recuperarlo despues!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.Rangers.splice(i, 1);
        this.rangerS.borrarRanger(range.id)
        .subscribe();
        Swal.fire(
          'Borrado!',
          'Su heroe se ha borrado.',
          'success'
        )
      }
    })
  }

}
