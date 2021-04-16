import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  // {path : 'home', component: HomeComponent}, 
  // {path: 'contacts',
  //   component : ContactsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
