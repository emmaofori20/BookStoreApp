import { Component, Input, OnInit } from '@angular/core';
import { BookService } from 'src/app/Service/book.service';
import { CategoryService } from 'src/app/Service/category.service';

@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.scss']
})
export class AddEditBookComponent implements OnInit {

  @Input()book:any;
  BookId!:number;
  Name!: string;
  BookPicture!:string;
  DepartmentId!: string;
  Author!:string;
  Description!:string;
  Price!:number;
  CategoryId!:number;

  categoryList:any =[];

  constructor(private bookservice:BookService, private categoryservice:CategoryService) { }

  ngOnInit(): void {
    this.loadCategoryList();
  }

  loadCategoryList(){
    this.categoryservice.getCategoryList().subscribe(
      data=>{
        this.categoryList = data;

        this.BookId=this.book.bookId;
        this.Name = this.book.name;
        this.BookPicture = this.book.bookPicture;
        this.Author = this.book.author;
        this.Price= this.book.price;
        this.DepartmentId = this.book.departmentId;
        this.CategoryId = this.book.categoryId;
        this.Description = this.book.description
        }
    )
  }

  EditBook(){
    var val ={
      bookId:this.BookId,
      name:this.Name,
      bookPicture:this.BookPicture,
      price: this.Price ,
      author:this.Author,
      description:this.Description,
      categoryId:this.CategoryId
    };

    this.bookservice.updateBook(val).subscribe(res=>{
      alert("Category Updated Successfully")
    })
  }

  addBook(){
    var val ={
      name:this.Name,
      bookPicture:this.BookPicture,
      price: this.Price ,
      author:this.Author,
      description:this.Description,
      categoryId:this.CategoryId
    };

    debugger;

    this.bookservice.addBook(val).subscribe(res=>{
      alert("Category Added Successfully")
    })
  }

}
