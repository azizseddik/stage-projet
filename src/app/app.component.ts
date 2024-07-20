import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjetComponent } from './projet/projet.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , ProjetComponent , FormulaireComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet' ;
}
