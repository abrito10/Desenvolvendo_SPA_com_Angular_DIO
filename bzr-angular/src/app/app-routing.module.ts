import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BzrInicioComponent } from './components/bzr-inicio/bzr-inicio.component';

const routes: Routes = [
{
  path: '',
  redirectTo: 'favoritos',
  pathMatch: 'full'
},
{
path: 'favoritos',
    // quando a rota popssui mais de uma opcao tem de de o children
    children: [
  {
    path: '',
    component: BzrInicioComponent
  }
]
},
{ path: '**', redirectTo: 'favoritos/' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
