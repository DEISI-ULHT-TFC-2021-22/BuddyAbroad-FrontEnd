import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
//import {FireAuthService} from '../fire-auth.service';
//import {FireStorageService} from '../fire-storage.service';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

import { AlertController } from '@ionic/angular';

import FormJSon from '../../assets/register_form.json';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { $$ } from 'protractor';





  export interface Options {
      label?: string;
      placeholder?: string;
      required?: boolean;
      type?: string;
      exactLength?: number;
      minLength?: number
      contains?: string
  }

  export interface FormControlObject {
      key: string;
      type: string;
      options: Options;
  }



@Component({
  selector: 'app-new-register',
  templateUrl: './new-register.page.html',
  styleUrls: ['./new-register.page.scss'],
})


export class NewRegisterPage implements OnInit {

  myForm : FormGroup;
  registerForm = FormJSon;

  constructor(private fb : FormBuilder, private alertCtrl : AlertController, public http : HttpClient, private route : Router){
    console.log(FormJSon);
    this.myForm = this.fb.group({})

    this.createControls(this.registerForm);
  }

  createControls(controls : Array<FormControlObject>){
    for(let control of controls) {
      const newFormControl = new FormControl();

      if (control.options.required && control.key == "password") {
        newFormControl.setValidators([Validators.required,
        Validators.minLength(control.options.minLength), Validators.maxLength(32)]);
      }

      if(control.options.required && control.key == "mobile phone"){
        newFormControl.setValidators([Validators.maxLength(control.options.exactLength),
          Validators.minLength(control.options.exactLength),Validators.required]);
      }

      if(control.options.required && control.key == "email"){
        newFormControl.setValidators([Validators.required, Validators.minLength(6), 
          Validators.maxLength(32),Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$')]);
      }

      if(control.options.required && control.key == "full name") {
        newFormControl.setValidators([Validators.required,
          Validators.maxLength(50),
          Validators.pattern('^[a-zA-Z ]*$')]);
      }

      if(control.options.required && control.key == "birth date") {
        newFormControl.setValidators(Validators.required);
      }
      //control.options.exactLength


      this.myForm.addControl(control.key,newFormControl);
    }
    console.log('My form:', this.myForm);
  }

  async submitForm() {
    const alert = await this.alertCtrl.create({
      header: 'Test!',
      message: JSON.stringify(this.myForm.value),
      buttons : ['OK']
    });

    await alert.present();
  }

  //public validationsForm: FormGroup;
  /**public sucessMessage = "";
  public errorMessage = "";
  public validationMessages = {
    email: [
      {type: 'required', message: 'Email is required.'},
      {type: 'pattern', message: 'Enter a valid email.'},
    ],
    password: [
      {type: 'required', message: 'Password is required.'},
      {type: 'minlength', message: 'Minimium 6 characters.'}
    ],
    mobilePhone: [
      {type: 'required', message: 'Mobile Phone is required.'},
      {type: 'pattern', message: 'Enter a valid mobile phone.'}
    ],
    fullName: [
      {type: 'required', message: 'Your name is required.'},
    ],
  }

  constructor(
    private router: Router,
    private http: HttpClient 
    //private formBuilder: FormBuilder,
    //private authService: FireAuthService,
    //private fireStorageService: FireStorageService
  ) { }*/

  public ngOnInit(): void {
    /*this.myForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
      mobilePhone: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    });*/
  }

  public goLogInPage(): void {
    this.route.navigate(['/novo-login']);
  }

 /* public goHttp(): void {
    
    this.http.get('http://18.171.19.26/users/')
    .subscribe((response) => {
      console.log(response);
    });

    
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
              "name": "english"
          }
      ],
      "f_name": "ze",
      "l_name": "ronaldo",
      "email": "email111@email.com",
      "dob": "21-4-2021",
      "phone": "91111111",
      "image": null,
      "description": "SIIIIIIMMMM",
      "age": 37,
      "rating": 4,
      "tourcount": 8,
      "guide": null
    }

    this.http.post("http://18.171.19.26/users/?format=json", postData, requestOptions)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });

      //this.http.delete('http://18.171.19.26/users/?format=json', requestOptions);
  } */

  public test(): void {
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

    let postData2 = {
      "email": this.myForm.controls['email'].value,
      "password" : this.myForm.controls['password'].value
    }; 


    this.http.post('http://18.171.19.26/users/?format=json', postData, requestOptions)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });

    this.http.post('http://18.171.19.26/signup/?format=json', postData2, requestOptions)
    //.pipe(
     // catchError(this.handleError)
    //)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });

    this.confirmation();
  }

  async confirmation() {
    const alert = await this.alertCtrl.create({
      mode:'ios',
      backdropDismiss: false,
      header: 'Confirmation Code',
      subHeader: 'An email containing the verification code was sent to ' + this.myForm.controls['email'].value,
      message: 'Please insert the code:',
      inputs: [{
        type: 'text', name: 'verificationCode', placeholder: 'Verification Code'
      }],
      buttons: [{
        cssClass: 'buttonAlert',
        text: 'SUBMIT', handler: (res) => {
          var headers = new HttpHeaders();
          headers.append("Accept", 'application/json');
          headers.append('Content-Type', 'application/json' );
          //const requestOptions = new RequestHeaders({ headers: headers });

          const requestOptions = {
            headers: new HttpHeaders().append('Accept', 'application/json').append('Content-Type', 'application/json')
          };

          let postData = {
            "email": this.myForm.controls['email'].value,
            "code" : res.verificationCode
          }; 
          this.http.post('http://18.171.19.26/confirmAccount/?format=json', postData, requestOptions)
          .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
          this.goLogInPage();
        }
      }]
    });

    await alert.present();

    //const { role } = await alert.onDidDismiss();
    //console.log('onDidDismiss resolved with role', role);
  }

  handleError(error: Response) {
    if (error.status == 500) {      
      console.log("entrei");
      //this.confirmation();
    } else {
      return Observable.throw(error);
    }
  }
}
