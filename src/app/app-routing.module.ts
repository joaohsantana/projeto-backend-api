import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './paginas/lista/lista.component';
import { HomeComponent } from './paginas/home/home.component';
import { ContatoComponent } from './paginas/contato/contato.component';
import { MagiasComponent } from './paginas/magias/magias.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'paginas/home', component: HomeComponent },
  { path: 'paginas/lista', component: ListaComponent },
  { path: 'paginas/magias', component: MagiasComponent },
  { path: 'paginas/contato', component: ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
