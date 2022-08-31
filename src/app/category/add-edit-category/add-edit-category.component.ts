import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Service/category.service';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.scss']
})
export class AddEditCategoryComponent implements OnInit {

  @Input()category:any;
  CategoryId!:number;
  Name!: string;
  CategoryPicture!:string;

  constructor(private categoryservice:CategoryService) { }

  ngOnInit(): void {
    this.CategoryId=this.category.categoryId;
    this.Name = this.category.name;
    this.CategoryPicture = this.category.categoryPicture;

    console.log(this.category);
  }

  EditCategory(){
    var val ={
      categoryId:this.CategoryId,
      name:this.Name,
      categoryPicture:this.CategoryPicture
    };

    this.categoryservice.updateCategory(val).subscribe(res=>{
      alert("Category Updated Successfully")
    })
  }

  addCategory(){
    var val ={
      Name:this.Name,
      CategoryPicture:this.CategoryPicture
    };

    this.categoryservice.addCategory(val).subscribe(res=>{
      alert("Category Added Successfully")
    })
  }

}
