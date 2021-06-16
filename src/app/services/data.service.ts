import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentuser = ''
  currentacc = ''
  accountdetails: any = {
    1000: { name: 'ajay', acno: 1000, password: 'testone', balance: 5000 },
    1001: { name: 'jay', acno: 1001, password: 'testtwo', balance: 4000 },
    1002: { name: 'sjay', acno: 1002, password: 'testthree', balance: 8000 },
    1003: { name: 'raj', acno: 1003, password: 'testfour', balance: 7000 }
  }

  constructor() {
    this.getDetails();
  }
  saveDetails() {
    localStorage.setItem('accountdetails', JSON.stringify(this.accountdetails))
    if (this.currentuser) {
      localStorage.setItem('currentuser', JSON.stringify(this.currentuser))
    }
    if (this.currentacc) {
      localStorage.setItem('currentacc', JSON.stringify(this.currentacc))
    }
  }

  getDetails() {
    if (localStorage.getItem('accountdetails')) {
      this.accountdetails = JSON.parse(localStorage.getItem('accountdetails') || '')
    }
    if (localStorage.getItem('currentuser')) {
      this.currentuser = JSON.parse(localStorage.getItem('currentuser') || '')
    }
    if (localStorage.getItem('currentacc')) {
      this.currentacc = JSON.parse(localStorage.getItem('currentacc') || '')
    }
  }
  deleteaccdetails(acno: any) {
    if (this.currentacc==acno) {
      localStorage.removeItem('currentacc')
      return true;
    }
    else{
      return false
    }
  }
  register(name: any, acno: any, password: any) {

    let user = this.accountdetails
    if (acno in user) {
      return false
    }
    else {
      this.accountdetails[acno] = {
        name,
        acno,
        password,
        amount: 0
      }
      this.saveDetails()
      return true
    }
  }
  login(accno: any, pswd: any) {

    let dataset = this.accountdetails
    if (accno in dataset) {
      if (pswd == dataset[accno]['password']) {
        this.currentuser = dataset[accno]['name']
        this.currentacc = accno
        this.saveDetails()
        return true;
      }
      else {
        alert('Invalid password');
        return false
      }
    }
    else {
      alert('Invalid account');
      return false
    }
  }

  deposit(accno: any, pswd: any, amt: any) {
    var amount = parseInt(amt)
    let dataset = this.accountdetails
    if (accno in dataset) {
      if (pswd == dataset[accno]['password']) {
        dataset[accno]['balance'] += amount
        this.saveDetails()
        return dataset[accno]['balance'];
      }
      else {
        alert('Invalid password');
        return false
      }
    }
    else {
      alert('Invalid account');
      return false
    }
  }

  withdraw(waccno: any, wpswd: any, wamt: any) {
    var amount = parseInt(wamt);
    let dataset = this.accountdetails;
    if (waccno in dataset) {
      if (wpswd == dataset[waccno]['password']) {
        if (amount < dataset[waccno]['balance']) {
          dataset[waccno]['balance'] -= amount;
          this.saveDetails()
          return dataset[waccno]['balance'];
        }
        else {
          alert('Insufficient balance');
          return false;
        }
      }
      else {
        alert('Invalid password');
        return false
      }
    }
    else {
      alert('Invalid account');
      return false
    }

  }
}

