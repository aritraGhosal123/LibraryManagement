import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent implements OnInit {
  studentsForm : FormGroup;
  

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { 
    this.studentsForm = this.formBuilder.group({
   // id:['',Validators.required],
    name:['',Validators.required],
    department:['',Validators.required],
    rollNumber:['',Validators.required],
    birthDate:['',Validators.required],
    mobileNumber:['',Validators.required],
    

  }
  );

  }

  ngOnInit(): void {
  }

  saveStudent(){
    //Make Post Call to Request URL http://localhost:8081/books/saveStudent
    let studentData = this.studentsForm.value;
    //Handle date to string
    this.http.post('http://localhost:8081/students/saveStudent',studentData)
    .subscribe(response => {
      console.log('Student saved to DB', response)
      this.router.navigateByUrl('/student')
    }, error =>{
      console.error("Error in student save",error)
    }
    );
  }
}