import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService,
    private autenteticationService: AuthenticationService) 
  {
    this.autenteticationService
      .getStatus()
      .subscribe(
        (status)=>{
          this.userService.getUserById(status.uid)
            .valueChanges()
            .subscribe(
              (data:User)=>{
                this.user=data
                console.log("DatosUsuario" )
                console.log(this.user);
                
              }, 
              (error)=>{
                console.log(error);
              }
            )
        },
        (error)=>{
          console.log(error);
        }
      )
  }

  ngOnInit(): void {
  }

  saveSettings(){
    this.userService.editUser(this.user)
    .then(()=>{
      alert('Cambios guardados')
    })
    .catch((err)=>{
      alert('Error guardando cambios')
      console.log(err);
      
    })
  }

}
