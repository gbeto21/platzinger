import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private angularFireDataBase:AngularFireDatabase) { }

  createRequest(request){
    const cleanEmail = request.receiver_email.replace('.', ',')
    return this.angularFireDataBase.object('request/'+cleanEmail+'/'+request.sender).set(request)
  }
  
  setRequestStatus(request, status){
    const cleanEmail = request.receiver_email.replace('.', ',')
    return this.angularFireDataBase.object('request/'+cleanEmail+'/'+request.sender+'/status').set(status)
  }
  
  getRequestsForEmail(email){
    const cleanEmail = email.replace('.', ',')
    return this.angularFireDataBase.list('request/' + cleanEmail)

  }
}
