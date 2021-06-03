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
}

