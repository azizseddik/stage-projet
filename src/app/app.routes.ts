import { Routes } from '@angular/router';
import { ProjetComponent } from './projet/projet.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

export const routes: Routes = [   
     
    { path: "projet", component:ProjetComponent}, 
   
    {path:"formulaire"  , component:FormulaireComponent},
    {path:"**" ,component:ProjetComponent}
];
