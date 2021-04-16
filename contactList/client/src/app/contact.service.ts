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

export class ContactService {

  constructor(private http: HttpClient) { }

  // retrieving contacts
  getContacts(): Observable<contact[]>{
    return this.http.get('http://localhost:3000/api/contacts') as Observable<contact[]>;  //.pipe(map(res => res))   no .json()  as Observable<object>
  }

  // add contacts
  addContact(newContact){
    var headers = new HttpHeaders();
    headers.append('Context-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/newContact', newContact, {headers: headers})
    .pipe(map(res => res));
  }

  // delete contact
  deleteContact(id){
    return this.http.delete('http://localhost:3000/api/delContact/' + id)
    .pipe(map(res => JSON.parse(JSON.stringify(res)))); // convert an object to JSON
  }
}
