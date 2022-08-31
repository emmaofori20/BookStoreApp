import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ShowCategoryComponent } from './category/show-category/show-category.component';
import { AddEditCategoryComponent } from './category/add-edit-category/add-edit-category.component';
import { BookComponent } from './book/book.component';
import { ShowBookComponent } from './book/show-book/show-book.component';
import { AddEditBookComponent } from './book/add-edit-book/add-edit-book.component';

import { CategoryService } from './Service/category.service';
import { BookService } from './Service/book.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { TokenIntercepterService } from './Service/token-intercepter.service';
import { CategoryBookComponent } from './category-book/category-book.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ShowCategoryComponent,
    AddEditCategoryComponent,
    BookComponent,
    ShowBookComponent,
    AddEditBookComponent,
    LoginComponent,
    CategoryBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenIntercepterService,multi:true},CategoryService,BookService,
                ],
  bootstrap: [AppComponent]
})
export class AppModule { }
