import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';

import { MaterialModule } from './material/material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BzrInicioComponent } from './components/bzr-inicio/bzr-inicio.component';
import { CabecalhoComponent } from './shared/cabecalho/cabecalho.component';
import { RodapeComponent } from './shared/rodape/rodape.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { FavoritosListComponent } from './components/favoritos-list/favoritos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BzrInicioComponent,
    CabecalhoComponent,
    RodapeComponent,
    FavoritosComponent,
    FavoritosListComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    LayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
