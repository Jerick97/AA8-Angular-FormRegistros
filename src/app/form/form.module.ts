import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRegistroComponent } from './form-registro/form-registro.component';



@NgModule({
  declarations: [
    FormRegistroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormRegistroComponent
  ]
})
export class FormModule { }
