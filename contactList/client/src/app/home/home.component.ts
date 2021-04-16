import { Component, OnInit } from '@angular/core';
// importing contact service
import {ContactService} from '../contact.service';
// importing contact schema
import {contact} from '../contact';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ContactService]
})

export class HomeComponent implements OnInit {
  contacts: contact[]; // var for contact
  contact : contact;
  
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    // retrieve data; on load this will get initialized
    this.contactService.getContacts()
    .subscribe(contacts =>
      this.contacts = contacts); // check this
  }
}
