import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProjetComponent } from './projet/projet.component';
import { ArrayModel } from './formulaire/array';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormulaireComponent } from './formulaire/formulaire.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule ,
    CommonModule,
    MatIconModule,
    RouterModule.forRoot(routes) 
  ],
  declarations: [
    ProjetComponent,
    AppComponent,
    ArrayModel,
    FormulaireComponent 
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
