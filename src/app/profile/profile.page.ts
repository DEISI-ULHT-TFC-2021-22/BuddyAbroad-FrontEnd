import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {
  public user;

  constructor(
      
      public router: Router) {
  }

  ngOnInit() {
    this.user = {
      name: 'User',
      description: 'Description',
      home: 'Home',
      languanges: 'Languages',
      rating: '0',
      image: '/assets/addProfilePic.jpg',
    }
    
   
  }

}
