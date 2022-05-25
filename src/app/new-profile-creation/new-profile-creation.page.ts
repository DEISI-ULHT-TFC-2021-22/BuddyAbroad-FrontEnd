import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {ModalController, NavController} from '@ionic/angular';
import { userInfo } from 'os';
import { empty } from 'rxjs';
import { ListInterestsPage } from '../list-interests/list-interests.page';
import { ListLanguagesPage } from '../list-languages/list-languages.page';

@Component({
  selector: 'app-new-profile-creation',
  templateUrl: './new-profile-creation.page.html',
  styleUrls: ['./new-profile-creation.page.scss'],
})
export class NewProfileCreationPage implements OnInit {
  private file: File;
  user: any = [];
  languagesList = [];
  interestsList = [];
  description: string = this.user.description;
  id = "";

  constructor(private route: Router, private navCtrl: NavController, private http: HttpClient, private modalCtrl: ModalController, router:ActivatedRoute) {
    this.id= this.route.getCurrentNavigation().extras.state.id;
    router.params.subscribe(val => {
      this.sync()
    });
   }

  ngOnInit() {
    this.sync();
  }

  goback() {
    this.navCtrl.pop();
  }

  onFileChange(fileChangeEvent) {
    this.file = fileChangeEvent.target.files[0];
  }

  async openInterestList() {
    const modal = await this.modalCtrl.create({
      component: ListInterestsPage,
      componentProps: { 'value' : this.interestsList },
      cssClass: 'listaInteresses'
    });
    await modal.present();
    modal.onDidDismiss().then((data) => {
      const user = data['data']; // Here's your selected user!
      console.log(user);
      if(user.length != 0){
        this.interestsList = [];
      for(let data of user) {
          this.interestsList.push(data);
        }
      }
  });
  }

  async openLanguageList() {
    const modal = await this.modalCtrl.create({
      component: ListLanguagesPage,
      componentProps: { 'value' : this.languagesList },
      cssClass: 'listaLanguages'
    });
    await modal.present();
    modal.onDidDismiss().then((data) => {
      const user = data['data']; // Here's your selected user!
      console.log(user);
      if(user.length != 0){
        this.languagesList = [];
      for(let data of user) {
          this.languagesList.push(data);
        }
      }
  });
  }


  test() {
    console.log(this.interestsList);
    //console.log(this.description);
    //console.log(this.user.description);
    //console.log(this.convertToFormat(this.languagesList));
    console.log(this.user.name);
  }

  convertToFormat(list){
    let arrayWithValue = list.map(el => ({name: el}));
    let transformed = JSON.stringify(arrayWithValue,null,1);
    return JSON.parse(transformed);
  }


  async submitForm() {
    //let formData = new FormData();
    //formData.append("image: ", this.file, this.file.name)
    
    let postData = {
      "id": this.user.id,
      "interests": this.convertToFormat(this.interestsList),
      "languages": this.convertToFormat(this.languagesList),
      "name": this.user.name,
      "email": this.user.email,
      "dob": this.user.dob,
      "phone": this.user.phone,
      "image": "this.file.name",
      "description": this.description,
      "rating": this.user.rating,
      "tourcount": this.user.rating,
      "guide": this.user.guide
    }; 

    this.http.put(`http://18.171.19.26/users/${this.id}`, postData)
    .subscribe((response) => console.log(response))

    this.route.navigate(['tabs/home']);
  }


sync() {
  this.http.get(`http://18.171.19.26/users/${this.id}`)
  .subscribe(data => {
    console.log(data)
    this.user = data;
  })
}

}