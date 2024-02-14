import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  courseMsg:string = "This is a course componet message to its parent app.";
  @Output() msgEvent = new EventEmitter();


  onClick(){
    this.msgEvent.emit(this.courseMsg);
  }
}
