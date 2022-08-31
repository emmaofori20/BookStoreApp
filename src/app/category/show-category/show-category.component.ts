import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Service/category.service';
@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.scss']
})
export class ShowCategoryComponent implements OnInit {

  CategoryList:any=[];

  ModalTitle!: string;
  ActivateAddEditCatComp:boolean=false;
  category:any;
  userdata:any;
  controls:boolean=false;

  constructor(private categoryservice:CategoryService) {
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
    //Loads to get departments
    this.loadCategory();
  }

  addClick(){
    this.category ={
      categoryId: 0,
      name:"",
      categoryPicture:""
    }
    this.ModalTitle="Add Category";
    this.ActivateAddEditCatComp=true;
  }

  closeClick(){
    this.ActivateAddEditCatComp=false;
    this.loadCategory();
  }

  EditClick(item:any){
    this.category=item;
    this.ModalTitle="Edit Category";
    this.ActivateAddEditCatComp=true;

  }

  deleteClikc(item:any){
    if(confirm("Are you sure?")){
      this.categoryservice.deleteCategory(item.categoryId).subscribe(data=>{
        alert("Deleted Successfully");
        this.loadCategory();
      })
    }
  }

  loadCategory(){
    this.categoryservice.getCategoryList().subscribe(data=>{
      this.CategoryList = data;
      console.log(data);
    });

  }

}
