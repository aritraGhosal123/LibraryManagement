import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
  booksForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.booksForm = this.formBuilder.group({
      // Id: ['', Validators.required],
      title: ['', Validators.required],
      author: ['', Validators.required],
      isbn: ['', Validators.required],
      publicationDate: ['', Validators.required],
      publisher: ['', Validators.required],
      copies: [0],
      category: ['', Validators.required],
      genre: ['', Validators.required],
      subgenre: ['', Validators.required],


    }
    )
  }

  ngOnInit(): void {
  }
  // updateBook() {
  //   // Make Put call to request url http://localhost:8081/books/updateBook

  //   let bookData = this.booksForm.value;
  //   console.log(bookData)
  //   // Handle date to string
  //   this.http.put('http://localhost:8081/books/updateBook', bookData)
  //     .subscribe((response: any) => {
  //       console.log('Book saved to DB', response)
  //      // this.router.navigateByUrl('/book')
  //     }, (error: any) => {
  //       console.error("Error in book save", error)
  //     }
  //     );
  // }

  saveBook(){
    //Make Post Call to Request URL http://localhost:8081/books/saveBook
    let bookData = this.booksForm.value;
    //Handle date to string
    this.http.post('http://localhost:8081/books/saveBook',bookData)
    .subscribe(response => {
      console.log('Book saved to DB', response)
      this.router.navigateByUrl('/book')
    }, error =>{
      console.error("Error in book save",error)
    }
    );
  }

  
  

}