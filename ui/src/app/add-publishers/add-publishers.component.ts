import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-publishers',
  templateUrl: './add-publishers.component.html',
  styleUrls: ['./add-publishers.component.css']
})
export class AddPublishersComponent implements OnInit {
  publishersForm : FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.publishersForm = this.formBuilder.group({
   // id:['',Validators.required],
    name:['',Validators.required],
    address:['',Validators.required],
    phone:['',Validators.required],
    email:['',Validators.required],
    

  }
  );

  }

  ngOnInit(): void {
  }
  savePublisher(){
    //Make Post Call to Request URL http://localhost:8081/books/saveBook
    let publisherData = this.publishersForm.value;
    //Handle date to string
    this.http.post('http://localhost:8081/PublishersController/savePublisher',publisherData)
    //this.http.post('http://localhost:8080/Publishers/savePublisher',publisherData)
    .subscribe(response => {
      console.log('Publisher saved to DB', response)
      this.router.navigateByUrl('/publisher')
    }, error =>{
      console.error("Error in publisher save",error)
    }
    );
  }

}