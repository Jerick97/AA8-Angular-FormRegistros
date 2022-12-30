import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombre : string = "";
  apellidos : string = "";
  edad : string = "";
  registros : any = [];

  guardarDatos(name:string, surname:string, age:string){
    let validar =  Number(age) >= 18 ? `${name} es Mayor de Edad` : `${name} es Menor de Edad` ;
    this.registros.push({name,surname,age,validar});
  }

  obtenerDatos(name:string, surname:string, age:string){
      this.nombre = name;
      this.apellidos = surname;
      this.edad = age;

      this.guardarDatos(this.nombre,this.apellidos, this.edad);
  }
}
