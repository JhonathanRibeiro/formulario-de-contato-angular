import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CampoFormularioComponent } from './components/campo-formulario/campo-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    CampoFormularioComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
