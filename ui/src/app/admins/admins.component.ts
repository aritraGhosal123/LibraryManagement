import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  Title = 'Admin Management'

  admins = [
    {
      "id": 1,
      "name": "Ankita Sinha",
      "username": "ASinha002",
      "password": "2309@#$%^atikna"
    }
  ]

  isGreen = true

  constructor() { }

  ngOnInit(): void {
  }

}