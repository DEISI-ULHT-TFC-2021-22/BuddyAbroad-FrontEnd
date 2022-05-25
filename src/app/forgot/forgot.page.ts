import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import FormJSon from '../../assets/password_recovery_form.json';


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
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  myForm : FormGroup;
  recoveryForm = FormJSon;
  @Input("value") value;

  constructor(private modalCtrl: ModalController, private http: HttpClient, private fb : FormBuilder) {
    this.myForm = this.fb.group({})

    this.createControls(this.recoveryForm);
   }

  ngOnInit() {
    //console.log(this.value)
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

  dismiss() {
    this.modalCtrl.dismiss();
  }

  

  save() {
    let postData = {
      "username": this.value,
      "confirm_code": this.myForm.controls['code'].value,
      "password": this.myForm.controls['password'].value,
    }

    this.http.post('http://18.171.19.26/confirmForgotPassword/?format=json', postData)
        .subscribe(data => {
        console.log(data['_body']);
        console.log(data);

      }, error => {
        console.log(error);
      });

      this.dismiss();

  }

}
