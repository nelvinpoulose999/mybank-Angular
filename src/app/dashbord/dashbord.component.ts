import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  accno=''
  pswd=''
  amount=''

  waccno=''
  wpswd=''
  wamount=''
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
deposit(){
  var acno=this.accno;
  var pwd =this.pswd;
  var amt= this.amount
  const result=this.dataService.deposit(acno,pwd,amt)
  if (result){
    alert('Amount'+ amt + 'credited and balance is:'+ result);
  }
 
}
withdraw(){
  var wacno=this.waccno;
  var wpsw=this.wpswd;
  var wamt = this.wamount
  const result = this.dataService.withdraw(wacno,wpsw,wamt)
  if(result){
    alert('Amount' + wamt + 'debited and balance is :'+result)
  }
}
}
