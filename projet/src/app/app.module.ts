
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { AppComponent } from './app.component';
import { ProjetComponent } from './projet/projet.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ArrayModel } from './formulaire/array';
import { ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
@NgModule({
  declarations: [ 
    NgForm,
    FormulaireComponent ,
    ReactiveFormsModule,
    ProjetComponent,
    AppComponent,
    FormsModule,
    ArrayModel,
  ],
  imports: [  
    ReactiveFormsModule,
    BrowserModule, 
    FormsModule, 
    CommonModule, 
    ProjetComponent,
    MatIconModule,
    FormulaireComponent,
    NgForm, 
   RouterModule.forRoot(routes),
   ArrayModel,
   
    // ajoutez cette ligne,
  ],
  exports: [ RouterModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }