export class RangerModel {
    id : string ;
    nombre : string;
    temporada : string ;
    color : string;
    zord : string ;
    imagen: string;
    genero : boolean;
    estado: boolean;
    

    constructor(){
        this.estado = true;
        this.genero = true;
    }
}