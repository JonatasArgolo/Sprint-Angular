import { Component, inject,  } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  loginService = inject(LoginService)

  router = inject(Router)
  loginForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  })

  Submit(){
    const { name, password } = this.loginForm.value

    if(!this.loginForm.valid || !name || !password){
      alert("Existem campos não preenchidos!")
      return
    }

    this.loginService.login(name, password).subscribe({
      error: (err) => {

        if(err.status === 401){
          alert("Name or Password incorrect!")
          return
        }
        alert("Inner Error! Try again later..")
      },
      next: () =>{
        this.router.navigate(["/home"])
      }
    })
  } 
}
