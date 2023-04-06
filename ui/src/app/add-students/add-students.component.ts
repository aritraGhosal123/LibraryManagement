import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent implements OnInit {
  studentsForm : FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    this.studentsForm = this.formBuilder.group({
    Id:[''],
    Name:[''],
    Department:[''],
    RollNumber:[''],
    BirthDate:[''],
    MobileNumber:[''],
    

  }
  );

  }

  ngOnInit(): void {
  }

}
