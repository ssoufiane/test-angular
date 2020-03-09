import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListpersonneComponent} from './listpersonne/listpersonne.component';
import {PersonneformComponent} from './personneform/personneform.component';


const routes: Routes = [
  { path : 'list', component:ListpersonneComponent},
  {path: 'add' , component: PersonneformComponent},
  {path:'',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
