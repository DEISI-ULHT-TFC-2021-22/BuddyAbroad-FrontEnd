import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-new-profile-creation',
  templateUrl: './new-profile-creation.page.html',
  styleUrls: ['./new-profile-creation.page.scss'],
})
export class NewProfileCreationPage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  goback() {
    this.navCtrl.pop();
  }

}
