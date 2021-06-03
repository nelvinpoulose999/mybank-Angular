import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname=''
  accno=""
  pswd=""

  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit(): void {
  }
register(){
  // alert('Register Clicked');
  var accno=this.accno
  var uname=this.uname
  var pswd=this.pswd
  const result=this.dataService.register(uname,accno,pswd)

  if (result){
    alert('Successfully Registered');
    this.router.navigateByUrl('');
  }
  else{
    alert('Account already exist Please Login')
  }

}
}
