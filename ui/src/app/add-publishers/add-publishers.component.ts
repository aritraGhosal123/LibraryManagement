import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-publishers',
  templateUrl: './add-publishers.component.html',
  styleUrls: ['./add-publishers.component.css']
})
export class AddPublishersComponent implements OnInit {
  publishersForm : FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    this.publishersForm = this.formBuilder.group({
    Id:[''],
    Name:[''],
    Address:[''],
    Phone:[''],
    Email:[''],
    

  }
  );

  }

  ngOnInit(): void {
  }

}