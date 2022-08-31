import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Service/book.service';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.scss']
})
export class ShowBookComponent implements OnInit {
  userdata: any;
  controls: boolean | undefined;

  BookList:any=[];

  ModalTitle!: string;
  ActivateAddEditCatComp:boolean=false;
  book:any;

  constructor(private bookservice:BookService) {
    let userJson= localStorage.getItem('UserData');
    this.userdata = userJson !== null ? JSON.parse(userJson) : false;

    //setting controls
    if(this.userdata.isSuccess){
      this.controls = true;
    }else{
      this.controls =false;
    }
  }

  ngOnInit(): void {
    //Loads to get books
    this.loadBooks();
  }

  addClick(){
    this.book ={
      bookId: 0,
      name:"",
      bookPicture:""
    }
    this.ModalTitle="Add book";
    this.ActivateAddEditCatComp=true;
  }

  closeClick(){
    this.ActivateAddEditCatComp=false;
    this.loadBooks();
  }

  EditClick(item:any){
    this.book=item;
    this.ModalTitle="Edit Category";
    this.ActivateAddEditCatComp=true;

  }

  deleteClikc(item:any){
    if(confirm("Are you sure?")){
      this.bookservice.deleteBook(item.bookId).subscribe(data=>{
        this.loadBooks();
      })
    }
  }

  loadBooks(){
    this.bookservice.getBookList().subscribe(data=>{
      this.BookList = data;
      console.log(data);
    });

  }

}
