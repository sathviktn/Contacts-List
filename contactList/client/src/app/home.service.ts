import { Injectable } from '@angular/core';
// import http modules for retrieving and send data
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
// import contact class from contact.ts
import {contact} from './contact';
// import reactive js operator
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor(private http: HttpClient) { }

  // retrieving contacts
  getContacts(): Observable<contact[]>{
    return this.http.get('http://localhost:3000/api/contacts') as Observable<contact[]>;  //.pipe(map(res => res))   no .json()  as Observable<object>
  }

}
