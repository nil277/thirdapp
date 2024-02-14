import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  reactiveFrom: FormGroup;

  ngOnInit(): void {
    this.reactiveFrom = new FormGroup({
      firstname : new FormControl(null),
      lastname : new FormControl(null),
      email : new FormControl(null),
      country : new FormControl('india'),
      gender : new FormControl('other'),
      hobbies : new FormControl(null)
    });
  }

  onSubmit(){
    console.log(this.reactiveFrom);
  }
}
