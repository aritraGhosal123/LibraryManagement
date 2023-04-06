import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  Title = 'Students Management'

  students = [
    {
      "id": 65,
      "name": "Sayani Chowdhury",
      "department": "Computer Science",
      "rollNumber": "1104",
      "birthDate": "2002-06-26",
      "mobileNumber": "7890234551"
    },
    {
      "id": 66,
      "name": "Aryan Acharya",
      "department": "Information Technology",
      "rollNumber": "1204",
      "birthDate": "2002-08-02",
      "mobileNumber": "6847221980"
    },
    {
      "id": 67,
      "name": "Shinjana Chatterjee",
      "department": "Data Science",
      "rollNumber": "1302",
      "birthDate": "2001-04-24",
      "mobileNumber": "9833567700"
    },
    {
      "id": 68,
      "name": "Arideepa Bhattacharjee",
      "department": "Information Technology",
      "rollNumber": "1201",
      "birthDate": "2002-09-23",
      "mobileNumber": "8716666574"
    },
    {
      "id": 69,
      "name": "Soham Chatterjee",
      "department": "Biotechnology",
      "rollNumber": "1007",
      "birthDate": "2001-10-15",
      "mobileNumber": "7876583835"
    },
    {
      "id": 70,
      "name": "Aishiqui Ghosh",
      "department": "Biotechnology",
      "rollNumber": "1004",
      "birthDate": "2002-06-18",
      "mobileNumber": "6289733163"
    },
    {
      "id": 71,
      "name": "Sreetama Bose",
      "department": "Data Science",
      "rollNumber": "1308",
      "birthDate": "2001-12-11",
      "mobileNumber": "6289742111"
    },
    {
      "id": 72,
      "name": "Souradeep Biswas",
      "department": "Information Technology",
      "rollNumber": "1209",
      "birthDate": "2002-05-05",
      "mobileNumber": "9753864210"
    },
    {
      "id": 73,
      "name": "Nidhi Singh",
      "department": "Biotechnology",
      "rollNumber": "1005",
      "birthDate": "2001-12-31",
      "mobileNumber": "9876543210"
    },
    {
      "id": 74,
      "name": "Sayanah Basu",
      "department": "Computer Science",
      "rollNumber": "1207",
      "birthDate": "2001-01-23",
      "mobileNumber": "8712244680"
    }
  ]

  isGreen = true

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addStudents(){
    console.log("addStudents button clicked !!") 
    // Take user to /add-students url
    this.router.navigateByUrl('/add-students')
   }

}