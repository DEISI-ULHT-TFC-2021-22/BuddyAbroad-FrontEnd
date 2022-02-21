import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { AlertController } from '@ionic/angular';

import FormJSon from '../../assets/login_form.json';


export interface Options {
  label?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
}

export interface FormControlObject {
  key: string;
  type: string;
  options: Options;
}

@Component({
  selector: 'app-novo-login',
  templateUrl: './novo-login.page.html',
  styleUrls: ['./novo-login.page.scss'],
})
export class NovoLoginPage implements OnInit {

  myForm : FormGroup;
  loginForm = FormJSon;

  constructor(private fb : FormBuilder, private alertCtrl : AlertController, public http : HttpClient, private route : Router){
    console.log(FormJSon);
    this.myForm = this.fb.group({})

    this.createControls(this.loginForm);
  }

  public ngOnInit(): void {
  }

  createControls(controls : Array<FormControlObject>){
    for(let control of controls) {
      const newFormControl = new FormControl();

      if(control.options.required) {
        newFormControl.setValidators(Validators.required);
      }

      this.myForm.addControl(control.key,newFormControl);
    }
  console.log('My form', this.myForm);
  }

  async submitForm() {
    const alert = await this.alertCtrl.create({
      header: 'Test!',
      message: JSON.stringify(this.myForm.value),
      buttons : ['OK']
    });

    await alert.present();
  }

  public goRegisterPage(): void {
    this.route.navigate(['/new-register']);
  }

  public goHomePage(): void{
    this.route.navigate(['//tabs/home']);
  }


  /*public test(): void {
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    //const requestOptions = new RequestHeaders({ headers: headers });

    const requestOptions = {
      headers: new HttpHeaders().append('Accept', 'application/json').append('Content-Type', 'application/json')
    };

    let postData = {
      "id": 11,
      "interests": [
        {
            "name": "mountain_climbing"
        }
      ],
      "languages": [
          {
              "name": "portuguese"
          }
      ],
      "f_name": "test",
      "l_name": "test",
      "email": "test@email.com",
      "dob": "22-5-2001",
      "phone": "923415278",
      "image": null,
      "description": "yessir",
      "age": 20,
      "rating": 5,
      "tourcount": 10,
      "guide": null
    };

    this.http.post("http://18.171.19.26/users/?format=json", postData, requestOptions)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
  }*/

  /*public test(): void {
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    //const requestOptions = new RequestHeaders({ headers: headers });

    const requestOptions = {
      headers: new HttpHeaders().append('Accept', 'application/json').append('Content-Type', 'application/json')
    };

    let postData = {
      "id": 0,
      "interests": [
        {
            "name": ""
        }
      ],
      "languages": [
          {
              "name": ""
          }
      ],
      "name": this.myForm.controls['full name'].value,
      //"l_name": this.myForm.controls['password'].value,
      "email": this.myForm.controls['email'].value,
      "dob": this.myForm.controls['birth date'].value.split('T')[0],
      "phone": this.myForm.controls['mobile phone'].value,
      "image": null,
      "description": "",
      "age": 37,
      "rating": 4,
      "tourcount": 8,
      "guide": null
    }; 

    this.http.post('http://18.171.19.26/users/?format=json', postData, requestOptions)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
  }*/
}
