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
  registros : string[] = [];

  obtenerDatos(name:string, surname:string, age:string){
      this.nombre = name,
      this.apellidos = surname;
      this.edad = age;
  }
}
