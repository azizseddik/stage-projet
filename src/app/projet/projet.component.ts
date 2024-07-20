import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulaireComponent } from '../formulaire/formulaire.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projet',
  standalone: true,
  imports: [ CommonModule , FormulaireComponent],
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.css' 
})
export class ProjetComponent {  
  url='https://v17.angular.io/assets/images/logos/angular/logo-nav@2x.png';
  
  constructor(private user:Router){} 
  crer(){ 
    this.user.navigate(['/formulaire']);  // navigation vers formulaireComponent outer.navigate(['/formulaire']);  // navigation vers formulaireComponent.navigate(['/formulaire']);  // navigation vers formulaireComponent
  }
      }

