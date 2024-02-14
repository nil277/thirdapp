import { Component, ViewChild } from '@angular/core';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'thirdapp';

  parentVar:string = "this ia a parent variable.";

  childMessage:string = '';

  fromCourse:string ='';
  arr = ['home','about','course','registration'];

  @ViewChild(ContactComponent) childObj:ContactComponent;


  ngAfterViewInit()
  {
    console.log(this.childObj);
    //this.childMessage = this.childObj.contactChild;
  }

  receive($event:any){
    this.fromCourse= $event;
  }
  
}
