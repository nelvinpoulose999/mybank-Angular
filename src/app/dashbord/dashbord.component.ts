import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  acno=''
  ldate:Date=new Date();
  // accno=''
  // pswd=''
  // amount=''

  // waccno=''
  // wpswd=''
  // wamount=''
  depositForm=this.fb.group({
    accno: ["", [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })
  withdrawForm=this.fb.group({
    waccno: ["", [Validators.required, Validators.pattern('[0-9]*')]],
    wpswd: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    wamount: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })
  user=this.dataService.currentuser
  constructor(private dataService:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
deposit(){
  var acno=this.depositForm.value.accno;
  var pwd =this.depositForm.value.pswd;
  var amt= this.depositForm.value.amount
  if (this.depositForm.valid){
    const result=this.dataService.deposit(acno,pwd,amt)
    if (result){
      alert('Amount'+ amt + 'credited and balance is:'+ result);
    }
  }
  else{
    alert('invalid form')
  }
 
 
}
withdraw(){
  var wacno=this.withdrawForm.value.waccno;
  var wpsw=this.withdrawForm.value.wpswd;
  var wamt = this.withdrawForm.value.wamount;
  if(this.withdrawForm.valid){
    const result = this.dataService.withdraw(wacno,wpsw,wamt)
    if(result){
      alert('Amount' + wamt + 'debited and balance is :'+result)
    }
  }
  else{
    alert('Invalid Form')
}
}

deleteAcc(){
  this.acno=this.dataService.currentacc
  console.log(this.acno+'parent')
}

onCancel(){
  this.acno=''
}

onDelete(event:any){
  alert('from parent'+ event)
  const result=this.dataService.deleteaccdetails(event)
  if(result){
    alert('Account Successfully deleted')
  }
  else{
    alert("Operation denied")
  }
}
}
