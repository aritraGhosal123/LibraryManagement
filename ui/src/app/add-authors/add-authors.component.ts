import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-authors',
  templateUrl: './add-authors.component.html',
  styleUrls: ['./add-authors.component.css']
})
export class AddAuthorsComponent implements OnInit {
  authorsForm : FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    this.authorsForm = this.formBuilder.group({
    Id:[''],
    BirthDate:[''],
    Name:[''],
    Nationality:[''],
    

  }
  );

  }

  ngOnInit(): void {
  }

}
