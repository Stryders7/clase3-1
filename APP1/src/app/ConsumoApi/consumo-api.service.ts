import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumoApiService {

  private base_url = 'https://rickandmortyapi.com/api';

  constructor(
    private http : HttpClient
  ) { }

  getCharacter():Observable<any>{
    return this.http.get('${this.base_url}/character');

  }
}
