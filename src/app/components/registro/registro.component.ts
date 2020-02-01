import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Usuario} from '../../models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user : Usuario;
  registerForm :  FormGroup;
  constructor() {

    this.registerForm = new FormGroup({
      nombre: new FormControl(),
      correo: new FormControl(),
      clave: new FormControl()
    }),
    this.user = new Usuario("","","")

  }

  ngOnInit() {
  }


  	metRegistrar(){
		this.user.nombre =  this.registerForm.value.nombre;
		this.user.correo =  this.registerForm.value.correo;
		this.user.clave =  this.registerForm.value.clave;

    console.log('mostrar'+this.user.nombre);

    console.log('correo '+this.user.correo);
    console.log('clave'+this.user.clave);

      ///DEspues hacemos el servicio
	  }


}
