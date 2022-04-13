import { Component, OnInit } from '@angular/core';
import { RangerModel } from 'src/app/ModelRanger/ranger.model';
import { RangerService } from 'src/app/servicio/ranger.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

//ALERTAS
import Swal from "sweetalert2";


@Component({
  selector: 'app-ranger',
  templateUrl: './ranger.component.html',
  styleUrls: ['./ranger.component.css']
})
export class RangerComponent implements OnInit {
  ranger : RangerModel = new RangerModel();
  constructor(private rangerS : RangerService,
              private route : ActivatedRoute ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    
    if(id !== 'nuevo'){
      this.rangerS.obtenerRanger(id)
      .subscribe(
        ( range : RangerModel) =>{
        this.ranger = range;
        this.ranger.id= id;
      })   
     }
  

  }


  guardar(form : NgForm){
    if(form.invalid){
      console.log("formulario invalido");
      return;
    }

    Swal.fire({​​​​

      title: 'Espere!',

      text: 'Guardando',

      icon: 'info',

      allowOutsideClick: false

    }​​​​)
    Swal.showLoading();
    
let peticion : Observable<any>;

    if(this.ranger.id){
      peticion = this.rangerS.editarRanger(this.ranger);
    }else{
     peticion = this.rangerS.crearRanger(this.ranger);
    }

    peticion.subscribe(resp =>{
      Swal.fire 
      ({
       title: this.ranger.nombre,
       text:  'Se guardo correctamente',
       icon:  'success'
      })
    })


  }

}
