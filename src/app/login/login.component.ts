import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim='Your Perfect Banking Partner';

  accno='Account Number Please'
  pswd=''

  constructor(private router:Router,private dataService:DataService) { }

  ngOnInit(): void {
  }

  // accChange(event:any){
  //   this.accno=event.target.value
  //   console.log(event.target.value);
  // }

  // pwdChange(event:any){
  //   this.pswd=event.target.value;
  //   console.log(event.target.value);
  // }

login(){
  // console.log(this.accno,this.pswd);
  
  var acno=this.accno;
  var password=this.pswd;
  let dataset=this.dataService.accountdetails
  if (acno in dataset){
    if (password==dataset[acno]['password']){
      alert('Login success');
      this.router.navigateByUrl('dashbord');
    }
    else{
      alert('Invalid password');
    }
  }
  else{
    alert('Invalid account');
  }
}

register(){
this.router.navigateByUrl('register')
}
}
