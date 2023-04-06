import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  Title = 'Books Management'

  // books = [
  //   {
  //     "id": 33,
  //     "title": "The Hunger Games",
  //     "author": "Suzanne Collins",
  //     "isbn": "9780606149495",
  //     "publicationDate": "2009-05-01",
  //     "publisher": "Turtleback Books",
  //     "copies": 4,
  //     "category": "Story Book",
  //     "genre": "Fantasy",
  //     "subgenre": "Romance"
  //   },
  //   {
  //     "id": 34,
  //     "title": "Pride and Prejudice",
  //     "author": "Jane Austen",
  //     "isbn": "9780141439518",
  //     "publicationDate": "2000-10-10",
  //     "publisher": "Modern Library",
  //     "copies": 5,
  //     "category": "Story Book",
  //     "genre": "Classics",
  //     "subgenre": "History"
  //   },
  //   {
  //     "id": 35,
  //     "title": "The Book Thief",
  //     "author": "Markus Zusak",
  //     "isbn": "9780375842207",
  //     "publicationDate": "2006-03-14",
  //     "publisher": "Alfred A.Knopf",
  //     "copies": 2,
  //     "category": "Story Book",
  //     "genre": "Classics",
  //     "subgenre": "History"
  //   },
  //   {
  //     "id": 36,
  //     "title": "Twilight",
  //     "author": "Stephenie Meyer",
  //     "isbn": "9780316015844",
  //     "publicationDate": "2006-09-06",
  //     "publisher": "Little, Brown & Company",
  //     "copies": 5,
  //     "category": "Novel",
  //     "genre": "Fantasy",
  //     "subgenre": "Paranormal"
  //   },
  //   {
  //     "id": 37,
  //     "title": "Animal Farm",
  //     "author": "George Orwell",
  //     "isbn": "9780451526342",
  //     "publicationDate": "1996-04-01",
  //     "publisher": "Signet Classics",
  //     "copies": 3,
  //     "category": "Story Book",
  //     "genre": "Fantasy",
  //     "subgenre": "Fiction"
  //   },
  //   {
  //     "id": 38,
  //     "title": "The Fault in Our Stars",
  //     "author": "John Green",
  //     "isbn": "9780525478812",
  //     "publicationDate": "2012-01-10",
  //     "publisher": "Dutton Books",
  //     "copies": 5,
  //     "category": "Story Book",
  //     "genre": "Young Adult",
  //     "subgenre": "Romance"
  //   },
  //   {
  //     "id": 39,
  //     "title": "Gone with the Wind",
  //     "author": "Margaret Mitchell",
  //     "isbn": "9781416548942",
  //     "publicationDate": "1999-04-01",
  //     "publisher": "Warner Books",
  //     "copies": 3,
  //     "category": "Story Book",
  //     "genre": "Classics",
  //     "subgenre": "Romance"
  //   },
  //   {
  //     "id": 40,
  //     "title": "Little Women",
  //     "author": "Louisa may Alcott",
  //     "isbn": "9780099572961",
  //     "publicationDate": "1868-04-06",
  //     "publisher": "Roberts Brothers",
  //     "copies": 7,
  //     "category": "Story Book",
  //     "genre": "Young Adult",
  //     "subgenre": "Romance"
  //   },
  //   {
  //     "id": 41,
  //     "title": "The Adventure of Sherlock Holmes",
  //     "author": "Arthur Conan Doyle",
  //     "isbn": "9781566196048",
  //     "publicationDate": "1986-01-01",
  //     "publisher": "Barnes & Noble Books",
  //     "copies": 5,
  //     "category": "Story Book",
  //     "genre": "Fiction",
  //     "subgenre": "Detective"
  //   },
  //   {
  //     "id": 43,
  //     "title": "To Kill a Mocking Bird",
  //     "author": "Harper Lee",
  //     "isbn": "9780446310789",
  //     "publicationDate": "1988-10-11",
  //     "publisher": "Grand Central",
  //     "copies": 3,
  //     "category": "Story Book",
  //     "genre": "Historical",
  //     "subgenre": "War"
  //   }
  // ]
  books: any=[];
  isGreen = true

  constructor(private router: Router, private http: HttpClient ) { }

  ngOnInit(): void {
    this.fetchAllBooks()
  }
  

  addBooks(){
   console.log("addBooks button clicked !!") 
   // Take user to /add-books url
   this.router.navigateByUrl('/add-books')
  }
  fetchAllBooks(){
    this.http.get("http://localhost:8081/books/getAll")
    .subscribe(resp => {
      this.books=resp;
      console.log("Book shown successfully",this.books);
    }, error=> {
      console.error("Error in retrieving books: ",error);
    });
  }
  deleteBook(bookID:Number){
    
    const url = 'http://localhost:8081/books/delete/'+bookID
    console.log(bookID)
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Book deleted successfully');
      this.fetchAllBooks()
    }, error => {
      console.error('Error deleting books:',error);
    });
  }

}
