import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { ListaComponent } from './paginas/lista/lista.component';
import { ContatoComponent } from './paginas/contato/contato.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CasaPipe } from './pipes/casa.pipe';
import { FonteDirective } from './diretivas/fonte.directive';
import { MagiasComponent } from './paginas/magias/magias.component';
import { GeneroPipe } from './pipes/genero.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaComponent,
    ContatoComponent,
    HeaderComponent,
    FooterComponent,
    CasaPipe,
    FonteDirective,
    MagiasComponent,
    GeneroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
