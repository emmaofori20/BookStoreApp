import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;
  userData:any;

  constructor(private authservice:AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  validateUser(){
    var user={
      Email: this.email,
      Password: this.password
    }


    this.authservice.LoginUser(user).subscribe(data=>{
        this.userData = data
        localStorage.setItem('UserData', JSON.stringify(this.userData));


        ///When sucess
        this.router.navigate(['/category']);

    });


    /// More checks

    //if(!this.userData.isSuccess.value){
     // console.log("wrong details")
    //}else{
     // console.log('correct details')
    //}
  }

}
