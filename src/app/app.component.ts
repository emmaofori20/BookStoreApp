import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BookStoreApp';
  userdata: any;
  controls: boolean;
  useremail!:string;

  constructor( private router:Router){
    let userJson= localStorage.getItem('UserData');
    this.userdata = userJson !== null ? JSON.parse(userJson) : false;

    console.log(userJson);
    //setting controls
    if(this.userdata.isSuccess){
      this.controls = true;
      this.useremail= this.userdata.email;
    }else{
      this.controls =false;
    }
  }

  LogoutUser(){
    localStorage.clear();
    this.controls=false;
    this.router.navigate(['/login']);
  }
}
