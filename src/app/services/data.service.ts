import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  accountdetails:any = {
    1000: { name: 'ajay', acno: 1000, password: 'testone', balance: 5000 },
    1001: { name: 'jay', acno: 1001, password: 'testtwo', balance: 4000 },
    1002: { name: 'sjay', acno: 1002, password: 'testthree', balance: 8000 },
    1003: { name: 'raj', acno: 1003, password: 'testfour', balance: 7000 }
}

  constructor() { }
register(name:any,acno:any,password:any){

  let user= this.accountdetails
  if (acno in user){ 
    return false
  }
  else{
    this.accountdetails[acno]={
      name,
      acno,
      password,
      amount:0
    }
    
    return true
  }
}
login(accno:any,pswd:any){
 
  let dataset=this.accountdetails
  if (accno in dataset){
    if (pswd==dataset[accno]['password']){
      return true;
    }
    else{
      alert('Invalid password');
      return false
    }
  }
  else{
    alert('Invalid account');
    return false
  }
}

deposit(accno:any,pswd:any,amt:any){
  var amount=parseInt(amt)
  let dataset=this.accountdetails
  if (accno in dataset){
    if (pswd==dataset[accno]['password']){
      dataset[accno]['balance']+=amount
      return dataset[accno]['balance'];
    }
    else{
      alert('Invalid password');
      return false
    }
  }
  else{
    alert('Invalid account');
    return false
  }
}

withdraw(waccno:any,wpswd:any,wamt:any){
  var amount=parseInt(wamt);
  let dataset=this.accountdetails;
  if(waccno in dataset){
    if(wpswd==dataset[waccno]['password']){
      if(amount<dataset[waccno]['balance']){
      dataset[waccno]['balance']-=amount;
      return dataset[waccno]['balance'];
      }
      else{
        alert ('Insufficient balance');
        return false;
      }
    }
    else{
      alert('Invalid password');
      return false
    }
  }
  else{
    alert('Invalid account');
    return false
  }

}
}

