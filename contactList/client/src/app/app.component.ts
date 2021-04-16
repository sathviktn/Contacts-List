import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  clicked = false;
  curPage = "Add Contacts";
  curPageStatus = false;

  // on click button, page changes
  toggle(){
    this.clicked = !this.clicked;
    this.curPageStatus = !this.curPageStatus;
    if(this.curPageStatus){
      this.curPage = "Back to Home";
    }
    else{
      this.curPage = "Add Contacts";
    }
  }

}
