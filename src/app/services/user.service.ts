import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  SERVER_URL = environment.SERVER_URL + '/user'
  constructor(
    private httpClient: HttpClient,
    ) { }

  register(
    nom: string,
    age: string,
    tel: string, 
    csp: string,
    photo: string
    ){
    const API_URL = this.SERVER_URL + '/register';
    return this.httpClient.post(
      API_URL,
      {
        nom: nom,
        age: age,
        tel: tel,
        csp: csp,
        photo: photo
      }
    )
  }

  getUserById(id: string){
    const API_URL = this.SERVER_URL + '/' + id
    return this.httpClient.get(
      API_URL
    )
  }

}
