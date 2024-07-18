import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup ,NgForm,Validator } from '@angular/forms';
import { ArrayModel } from './array'; 
@Component({ 
  selector: 'app-formulaire',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent{   
  reactiveForm: FormGroup = new FormGroup({ });   
 public form: FormGroup=new FormGroup([]) ; 
 public registreArray:ArrayModel;
  constructor(private retour:Router ,){ this.registersArray=new ArrayModel(); }
        
      passwordPtn ='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$';
      registersArray:any ={  password: '',
      passwordConfirme: '' } ;
  validate(){ 
   
    this.passwordValidation.submitted = true;
    if (this.isPasswordValid()) {
      this.retour.navigate(['/projet']);
    }
}  
  passwordValidation={  submitted: false}; 
  isPasswordValid() : boolean { 
    return this.registersArray.password === this.registersArray.passwordConfirme;
  }

onSubmit(form: NgForm) {  
  if(form.valid) { 
    console.log(this.registersArray);
    this.retour.navigate(['/projet'])
  }
  
  // this.registersArray.push(this.reactiveForm.value);
  // this.reactiveForm.reset();
} 
pwdSubmit(){ 
  alert(this.registersArray)
}

}
