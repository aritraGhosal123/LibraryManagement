import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-authors',
  templateUrl: './add-authors.component.html',
  styleUrls: ['./add-authors.component.css']
})
export class AddAuthorsComponent implements OnInit {
  authorsForm : FormGroup;
  constructor(private formBuilder: FormBuilder,private http:HttpClient,private router:Router ) { 
    this.authorsForm = this.formBuilder.group({
    // id:[''],
    birthDate:[''],
    name:[''],
    nationality:[''],
    

  }
  );

  }

  ngOnInit(): void {
  }

  saveauthor(){
    //Make Post Call to Request URL http://localhost:8081/books/saveBook
    let authorData = this.authorsForm.value;
    //Handle date to string
    this.http.post('http://localhost:8081/Authors/saveAuthor',authorData)
    .subscribe((response: any) => {
      console.log('Author saved to DB', response)
      this.router.navigateByUrl('/author')
    }, (error: any) =>{
      console.error("Error in book author",error)
    }
    );
  }


}
