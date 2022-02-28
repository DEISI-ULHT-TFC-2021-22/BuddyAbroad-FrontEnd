import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.page.html',
  styleUrls: ['./new-profile.page.scss'],
})
export class NewProfilePage implements OnInit {

  constructor(private route : Router, private http : HttpClient) { }

  ngOnInit() {
    this.sync();
  }

  user: any = []

  sync() {
    this.http.get('http://18.171.19.26/users/72')
    .subscribe(data => {
      console.log(data)
      this.user = data;
    })
  }

  public goProfileCreationPage(): void {
    this.route.navigate(['/new-profile-creation']);
  }
}
