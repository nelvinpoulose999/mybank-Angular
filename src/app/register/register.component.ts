import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // uname=''
  // accno=""
  // pswd=""
  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    accno: ["", [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })
  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  register() {
    // alert('Register Clicked');

    var accno = this.registerForm.value.accno
    var uname = this.registerForm.value.uname
    var pswd = this.registerForm.value.pswd
    // console.log(uname,accno,pswd);
    if (this.registerForm.valid) {
      const result = this.dataService.register(uname, accno, pswd)

      if (result) {
        alert('Successfully Registered');
        this.router.navigateByUrl('');
      }
      else {
        alert('Account already exist Please Login')
      }

    }
    else{
      alert('Form Invalid')
    }

  }
}
