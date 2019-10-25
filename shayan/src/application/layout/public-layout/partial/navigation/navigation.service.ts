import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Navigation } from './Navigation';
import { CONFIG } from 'src/assets/value/CONFIG';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  url = CONFIG.URL
  constructor(private httpClient : HttpClient) { }

  public get ():Observable<Navigation[]>{
    let result = this.httpClient.get<Navigation[]>(this.url + "navigation.json");
    return result;
  }
  
}

  

