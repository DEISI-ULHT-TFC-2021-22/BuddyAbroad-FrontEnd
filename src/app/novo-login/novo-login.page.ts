import { Component, OnInit } from '@angular/core';


import { NavigationExtras, Router } from '@angular/router';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { AlertController, ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import FormJSon from '../../assets/login_form.json';
import { ForgotPage } from '../forgot/forgot.page';


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
  //email = ""

  constructor(private fb : FormBuilder, private alertCtrl : AlertController, public http : HttpClient, private route : Router, private toastCtrl: ToastController, private modalCtrl: ModalController){
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
    // let navigationExtras: NavigationExtras = { state: { email: this.email = this.myForm.controls['email'].value } };
    // console.log(this.email)
    // this.route.navigate(['//tabs/profile'], navigationExtras,);
    localStorage.setItem('email', this.myForm.controls['email'].value)
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

  public test(): void {
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    //const requestOptions = new RequestHeaders({ headers: headers });

    const requestOptions = {
      headers: new HttpHeaders().append('Accept', 'application/json').append('Content-Type', 'application/json')
    };

    let postData = {
      "email": this.myForm.controls['email'].value,
      "password" : this.myForm.controls['password'].value
    }; 

    


    this.http.post('http://18.171.19.26/login/?format=json', postData, requestOptions)
      .subscribe(data => {
        console.log(data['_body']);
        console.log(data);

        if(data == "Error: Incorrect username or password!"){
          this.wrongInput()
        }

        else{
          this.goHomePage()
        }

       }, error => {
        console.log(error);
      });
  }


async wrongInput() {
  const alert = await this.alertCtrl.create({
    cssClass: 'loginAlert',
    header: 'Error!',
    message: 'Incorrect username or password',
  });

  await alert.present();
}

async goForgotPage(email: String) {
  const modal = await this.modalCtrl.create({
    component: ForgotPage,
    componentProps: { 'value' : email },
    cssClass: 'listaInteresses'
  });
  await modal.present();
  modal.onDidDismiss().then((data) => {
    const user = data['data']; // Here's your selected user!
    console.log(user);
});
}

async emailPopUp() {
  const alert = await this.alertCtrl.create({
    cssClass: 'loginAlert',
    header: 'Password Recovery',
    message: 'Please insert your email:',
    inputs: [{
      type: 'text', name: 'emailRecovery', placeholder: 'Email'
    }],
    buttons: [{
      cssClass: 'buttonAlert',
      text: 'SUBMIT', handler: (res) => {
        let postData = {
          "username" : res.emailRecovery
        };
        this.http.post('http://18.171.19.26/forgotPassword/?format=json', postData)
        .subscribe(data => {
        console.log(data['_body']);
        console.log(data);

      }, error => {
        console.log(error);
      });
      this.goForgotPage(res.emailRecovery);
      }
    }]
  });

  await alert.present();
}


}