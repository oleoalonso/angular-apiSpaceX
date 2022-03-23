import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiSpaceService {

  apiURL = 'https://api.spacexdata.com/v3/launches';


  constructor(private httpClient: HttpClient) { }

  getList():Observable<any> {
    return this.httpClient.get<any[]>(this.apiURL);
  }
}
