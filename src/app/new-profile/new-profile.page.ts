import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.page.html',
  styleUrls: ['./new-profile.page.scss'],
})
export class NewProfilePage implements OnInit {

  //email = ""

  constructor(private route : Router, private http : HttpClient, private router:ActivatedRoute) {
    //this.email= this.route.getCurrentNavigation().extras.state.email;
    router.params.subscribe(val => {
      this.sync()
    });
  }

  
  
  
  ngOnInit(): void {
  }

  user: any = [];


  sync() {
    //this.http.get(`http://18.171.19.26/usersEmail/${this.email}`)
    this.http.get(`http://18.171.19.26/usersEmail/${localStorage.getItem('email')}`)
    .subscribe(data => {
      console.log(data)
      this.user = data;
      localStorage.setItem('userId', this.user.id)
    })
  }

  public goProfileCreationPage(): void {
    //let navigationExtras: NavigationExtras = { state: { id: this.user.id } };
    //this.route.navigate(['/new-profile-creation'], navigationExtras,);
    this.route.navigate(['/new-profile-creation']);
  }

   test() {
     //console.log(this.email)
  }


 

}