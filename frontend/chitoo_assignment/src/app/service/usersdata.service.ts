import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {

  constructor(private http:HttpClient) { }
  users(){
    return this.http.get('http://localhost:5000/');
  }
  winner(){
    return this.http.get("http://localhost:5000/showwinner")
  }

  savewinner(item: any) :Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const body = JSON.stringify(item);
    console.log(item)
    return this.http.post<any>("http://localhost:5000/savewinner", body, { headers });
   
  }
}
