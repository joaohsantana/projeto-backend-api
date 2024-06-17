import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {


  constructor(private http: HttpClient) { }

  apiLink = "https://hp-api.herokuapp.com/api/spells"

  getLista(){
    return this.http.get(this.apiLink)
  }
}
