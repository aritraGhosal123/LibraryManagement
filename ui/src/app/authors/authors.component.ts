import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

Title = 'Authors Management'

// authors = [
//   {
//     "id": 33,
//     "birthDate": "1962-08-10",
//     "name": "Suzanne Collins",
//     "nationality": "American"
//   },
//   {
//     "id": 34,
//     "birthDate": "1775-12-16",
//     "name": "Jane Austen",
//     "nationality": "English"
//   },
//   {
//     "id": 35,
//     "birthDate": "1926-04-28",
//     "name": "Harper Lee",
//     "nationality": "American"
//   },
//   {
//     "id": 36,
//     "birthDate": "1975-06-23",
//     "name": "Markus Zusak",
//     "nationality": "Australian"
//   },
//   {
//     "id": 37,
//     "birthDate": "1973-12-24",
//     "name": "Stephenie Meyer",
//     "nationality": "American"
//   },
//   {
//     "id": 38,
//     "birthDate": "1903-06-25",
//     "name": "George Orwell",
//     "nationality": "English"
//   },
//   {
//     "id": 39,
//     "birthDate": "1977-08-24",
//     "name": "John Green",
//     "nationality": "American"
//   },
//   {
//     "id": 40,
//     "birthDate": "1900-11-08",
//     "name": "Margaret Mitchell",
//     "nationality": "American"
//   },
//   {
//     "id": 41,
//     "birthDate": "1982-11-29",
//     "name": "Louisa May Alcott",
//     "nationality": "American"
//   },
//   {
//     "id": 42,
//     "birthDate": "1859-05-22",
//     "name": "Arthur Conan Doyle",
//     "nationality": "English"
//   }
// ]//

authors: any=[];
isGreen = true

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllAuthors()
  }

  addAuthors(){
    console.log("addAuthors button clicked !!") 
    // Take user to /add-authors url
    this.router.navigateByUrl('/add-authors')
   }
   fetchAllAuthors(){
    this.http.get("http://localhost:8081/Authors/getAll")
    .subscribe((resp: any) => {
      this.authors=resp;
      console.log("Author shown successfully",this.authors);
    }, (error: any)=> {
      console.error("Error in retrieving books: ",error);
    });
  }

  deleteAuthor(authorID:Number){
    
    const url = 'http://localhost:8081/Authors/delete/'+authorID
    console.log(authorID)
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('author deleted successfully');
      this.fetchAllAuthors()
    }, error => {
      console.error('Error deleting Authors:',error);
    });
  }  



}