import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.css']
})
export class PublishersComponent implements OnInit {

  Title = 'Publishers Management'

  // publishers = [
  //   {
  //     "id": 33,
  //     "name": "Turtleback Books",
  //     "address": "8950 Pershall Rd, St. Louis, Missouri, 63042, United States",
  //     "phone": "(314) 881-6571",
  //     "email": "turtlebackbooks@usa.com"
  //   },
  //   {
  //     "id": 34,
  //     "name": "Modern Library",
  //     "address": "1745 Broadway 11TH Fl, New York, 10019, United States",
  //     "phone": "(929) 238-0485",
  //     "email": "modernlibrary@e.randomhousebooks.com"
  //   },
  //   {
  //     "id": 35,
  //     "name": "Grand Central",
  //     "address": "237 Park Avenue Fl 16, New York, 10017, United States",
  //     "phone": "(212) 522-7200",
  //     "email": "grandcentralpublishing@hbgusa.com"
  //   },
  //   {
  //     "id": 36,
  //     "name": "Alfred.A.Knopf",
  //     "address": "Alfred A Knopf Inc, 1745 Broadway, New York, US",
  //     "phone": "(212) 572-2662",
  //     "email": "knopfpublicity@randomhouse.com"
  //   },
  //   {
  //     "id": 37,
  //     "name": "Dutton Books",
  //     "address": "3806 W Magnolia Blvd, Burbank, California, 91505, United States",
  //     "phone": "(818) 840-8003",
  //     "email": "duttonsbrentwood@randomhouse.com"
  //   },
  //   {
  //     "id": 38,
  //     "name": "Signet Classics",
  //     "address": "1185 Avenue of the Americas, NYC 10036",
  //     "phone": "(212) 782-3300",
  //     "email": "signetclassics@randomhouse.com"
  //   },
  //   {
  //     "id": 39,
  //     "name": "Little, Brown & Company",
  //     "address": "1290 Avenue Of The Americas, New York, NY",
  //     "phone": "(617) 227-0730",
  //     "email": "publicity@littlebrown.com"
  //   },
  //   {
  //     "id": 40,
  //     "name": "Warner Books",
  //     "address": "3 & 2 Colrado Ct, Hallam, Victoria, 3803, Australia",
  //     "phone": "61 395442899",
  //     "email": "warnerbooks@email.warnerbooks.com"
  //   },
  //   {
  //     "id": 41,
  //     "name": "Roberts Brothers",
  //     "address": "3601 Spring Hill Business Park, Mobile, Alabama, 36608, United States",
  //     "phone": "(251) 344-9220",
  //     "email": "JohnSmith@robertsbrothers.com"
  //   },
  //   {
  //     "id": 42,
  //     "name": "Barnes & Noble Books",
  //     "address": "33 E 17th St, New York City, New York, 10003, United States",
  //     "phone": "201-559-3882",
  //     "email": "barnesandnoble@mail.barnesandnoble.com"
  //   }
  // ]
  publishers : any=[];

  isGreen = true

  constructor(private router: Router, private http: HttpClient ) { }

  ngOnInit(): void {
    this.fetchAllPublishers()
  }

  addPublishers(){
    console.log("addPublishers button clicked !!") 
    // Take user to /add-publishers url
    this.router.navigateByUrl('/add-publishers')
   }

   fetchAllPublishers(){
    this.http.get("http://localhost:8081/PublishersController/getAll")
    .subscribe(resp => {
      this.publishers=resp;
      console.log("Publisher shown successfully",this.publishers);
    }, error=> {
      console.error("Error in retrieving publishers: ",error);
    });
  }
  deletePublisher(publisherID:Number){
    
    const url = 'http://localhost:8081/PublishersController/delete/'+publisherID
    console.log(publisherID)
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Book deleted successfully');
      this.fetchAllPublishers()
    }, error => {
      console.error('Error deleting publishers:',error);
    });
  }
}

