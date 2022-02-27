import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-new-profile-creation',
  templateUrl: './new-profile-creation.page.html',
  styleUrls: ['./new-profile-creation.page.scss'],
})
export class NewProfileCreationPage implements OnInit {
  private file: File;
  user: any = []

  constructor(private router: Router, private navCtrl: NavController, private http: HttpClient) { }

  ngOnInit() {
    this.sync();
  }

  goback() {
    this.navCtrl.pop();
  }

  onFileChange(fileChangeEvent) {
    this.file = fileChangeEvent.target.files[0];
  }

  async submitForm() {
    let formData = new FormData();
    formData.append("image: ", this.file, this.file.name)
    
    let postData = {
      "id": 73,
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
      "name": this.user.name,
      "email": this.user.email,
      "dob": this.user.dob,
      "phone": this.user.phone,
      "image": this.file.name,
      "description": "",
      "rating": 5,
      "tourcount": 8,
      "guide": null
    }; 

    this.http.put("http://18.171.19.26/users/73", postData)
    .subscribe((response) => console.log(response))
  }


sync() {
  this.http.get('http://18.171.19.26/users/72')
  .subscribe(data => {
    console.log(data)
    this.user = data;
  })
}

}