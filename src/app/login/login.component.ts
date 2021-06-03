import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim='Your Perfect Banking Partner';

  accno='Account Number Please'
  pswd=''
  accountdetails:any = {
    1000: { name: 'ajay', acno: 1000, password: 'testone', balance: 5000 },
    1001: { name: 'jay', acno: 1001, password: 'testtwo', balance: 4000 },
    1002: { name: 'sjay', acno: 1002, password: 'testthree', balance: 8000 },
    1003: { name: 'raj', acno: 1003, password: 'testfour', balance: 7000 }
}

  constructor(private router:Router) { }

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
  let dataset=this.accountdetails
  if (acno in dataset){
    if (password==dataset[acno]['password']){
      alert('Login success');
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
