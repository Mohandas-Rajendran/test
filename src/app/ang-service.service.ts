import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AngServiceService {

  constructor(private http:HttpClient) { }

  getUserList(){
    const url : string = 'https://reqres.in/api/users?page=2'; 
    return this.http.get(url);
  }
}
