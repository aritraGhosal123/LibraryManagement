import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StudentsComponent } from './students/students.component';
import { PublishersComponent } from './publishers/publishers.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AddStudentsComponent } from './add-students/add-students.component';
import { AddAuthorsComponent } from './add-authors/add-authors.component';
import { AddPublishersComponent } from './add-publishers/add-publishers.component';
import { AdminsComponent } from './admins/admins.component';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AuthorsComponent,
    SidenavComponent,
    StudentsComponent,
    PublishersComponent,
    AddBooksComponent,
    AddStudentsComponent,
    AddAuthorsComponent,
    AddPublishersComponent,
    AdminsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
