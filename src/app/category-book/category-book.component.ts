import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoryService } from '../Service/category.service';

@Component({
  selector: 'app-category-book',
  templateUrl: './category-book.component.html',
  styleUrls: ['./category-book.component.scss']
})
export class CategoryBookComponent implements OnInit {

  categoryId!:number;
  name!:string;
  BookList:any;

  constructor(private route:ActivatedRoute, private categoryservice:CategoryService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.categoryId =params['id'],
        this.name = params['name']
      },
    )


    debugger;
    this.categoryservice.getBooksInCategory(this.categoryId).subscribe(data=>{
        console.log("booksInCat",data)
    })

  }



  }




