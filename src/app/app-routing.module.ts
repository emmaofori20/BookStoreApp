import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { CategoryBookComponent } from './category-book/category-book.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'book',component:BookComponent},
  {path:'category',component:CategoryComponent},
  {path:'category/:id/:name', component:CategoryBookComponent},
  {path:'login',component:LoginComponent},


  {path:'', redirectTo:'/category', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
