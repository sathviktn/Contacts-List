import { Component, OnInit } from '@angular/core';
// importing contact service
import {ContactService} from '../contact.service';
// importing contact schema
import {contact} from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  contacts: contact[]; // var for contact
  contact : contact;
  firstName: string;
  lastName: string;
  address : string;
  phone : number;


  constructor(private contactService: ContactService) { }

  addContact(){
    const newContact = {
      firstName : this.firstName,
      lastName : this.lastName,
      address : this.address,
      phone : this.phone
    }
    // adding to service
    this.contactService.addContact(newContact)
    .subscribe(contact => {
      // pushing new contact to contacts[]
      this.contacts.push(newContact);

      // displaying contacts after adding
      this.contactService.getContacts()
        .subscribe(contacts =>
          this.contacts = contacts); 
    });
      
  }

  deleteContact(id : any){
    var contacts = this.contacts;
    this.contactService.deleteContact(id)
    .subscribe(data => {
      // deleting contacts from contacts array
      if(data.n == 1){  // if its actually deleted, we need to delete from contacts[]
          for(var i=0; i<contacts.length; i++){
            if(contacts[i]._id == id){
              contacts.splice(i, 1);  // splicing from contacts[]
            }
          }
      }
      // displaying contacts after deleting
      this.contactService.getContacts()
        .subscribe(contacts =>
          this.contacts = contacts); 
    });
  }

  ngOnInit(): void {
    // retrieve data; on load this will get initialized
    this.contactService.getContacts()
    .subscribe(contacts =>
      this.contacts = contacts); // check this
  }

}
