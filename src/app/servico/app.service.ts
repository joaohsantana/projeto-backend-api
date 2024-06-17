import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  apiLink = "https://hp-api.herokuapp.com/api/characters"

  getLista(){
    return this.http.get(this.apiLink)
  }
}
