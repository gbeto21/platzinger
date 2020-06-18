import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { FirebaseStorage } from 'angularfire2';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;

  imageChangedEvent: any = '';
  croppedImage: any = '';
  picture:any;


  constructor(
    private userService: UserService,
    private autenteticationService: AuthenticationService,
    private firebaseStorage: AngularFireStorage) 
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

    if(this.croppedImage){
      const currentPictureId = Date.now();
      const pictures = this.firebaseStorage.ref('pictures/' + currentPictureId + '.jpb').putString(this.croppedImage, 'data_url')
      pictures
      .then(
        (result)=>{
          this.picture = this.firebaseStorage.ref('pictures/'+ currentPictureId + '.jpg').getDownloadURL();
          this.picture.subscribe((p)=>{
            this.userService.setAvatar(p,this.user.uid).then(()=>{
              alert('Avatar subido correctamente')
            })
            .catch((error)=>{
              alert('Hubo un error subiendo imagen')
              console.error();
            })
          })
        })
      .catch((error)=>{
        console.error(error);
        
        })
    }

    else{
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

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  imageLoaded() {
    // show cropper
  }

  cropperReady() {
    // cropper ready
  }

  loadImageFailed() {
    // show message
  }

}
