import { ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import{RegistroComponent} from '../app/components/registro/registro.component';

const  appRoutes :
Routes = [
  {path:'registro', component:RegistroComponent}
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

