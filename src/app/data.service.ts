import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(public http: HttpClient) { }

  getPlanets() {
    return this.http.get(`https://swapi.co/api/planets`);
  }

}
