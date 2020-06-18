import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  operation: string = 'login'
  email: string = null;
  password: string = null;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  login(){
    this.authenticationService.loginWithEmail(this.email,this.password)
    .then((data)=>{
      alert('Logeado correctamente')
      console.log(data);
    })
    .catch((error)=>{
      alert('Ocurrió un error en el login')
      console.log(error);
    })
  }
  
  register(){
    this.authenticationService.registerWithEmail(this.email,this.password)
    .then((data)=>{
      alert('Registrado correctamente')
      console.log(data);
    })
    .catch((error)=>{
      alert('Ocurrió un error en el registro: ' + error)
      console.log(error);
    })
  }

}
