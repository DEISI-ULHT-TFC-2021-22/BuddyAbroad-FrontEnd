import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
//import {FireAuthService} from '../fire-auth.service';
//import {FireStorageService} from '../fire-storage.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { AlertController } from '@ionic/angular';

import FormJSon from '../../assets/register_form.json';


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
  selector: 'app-new-register',
  templateUrl: './new-register.page.html',
  styleUrls: ['./new-register.page.scss'],
})


export class NewRegisterPage implements OnInit {

  myForm : FormGroup;
  registerForm = FormJSon;

  constructor(private fb : FormBuilder, private alertCtrl : AlertController){
    console.log(FormJSon);
    this.myForm = this.fb.group({})

    this.createControls(this.registerForm);
  }

  createControls(controls : Array<FormControlObject>){
    for(let control of controls) {
      const newFormControl = new FormControl();

      if (control.options.required) {
        newFormControl.setValidators(Validators.required);
      }

      this.myForm.addControl(control.key,newFormControl);
    }
    console.log('My form:', this.myForm);
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
    /*this.validationsForm= this.formBuilder.group({
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
    //this.router.navigate(['/novo-login']);
  }

  public goHttp(): void {
    /*
    this.http.get('http://18.171.19.26/users/')
    .subscribe((response) => {
      console.log(response);
    });*/

    
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

    /*this.http.post("http://18.171.19.26/users/?format=json", postData, requestOptions)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });*/

      //this.http.delete('http://18.171.19.26/users/?format=json', requestOptions);
  }

}
