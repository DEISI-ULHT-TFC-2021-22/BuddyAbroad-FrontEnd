import { HttpClient } from '@angular/common/http';
import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-list-interests',
  templateUrl: './list-interests.page.html',
  styleUrls: ['./list-interests.page.scss'],
})
export class ListInterestsPage implements OnInit {

  @Input("value") value;
  user: any = [];

  constructor(private modalCtrl: ModalController, private http: HttpClient) {}


  sportsList = ["Sports","Baseball","Basketball","Volleyball","Cycling",
  "Soccer","Football","Jogging","Surfing","Swimming","Golf","Marathon running",
  "Martial arts","Karate","Gymnastics","Running","Tennis","Skiing","Ice skating"
  ];

  wellnessList = ["Exercising","Gym","Wellness","Yoga","Pilates","Meditating",
  "Feng shui","Mindfulness","Reiki"
  ];

  outdoorList = ["Outdoor Activities","Nature","Camping","Fishing",
  "Spearfishing","Gardening","Hiking","Mountain climbing","Trekking","Hunting"
  ];

  artList = ["Art","Writing","Photography","Blogging","Journaling","Drawing","Sketching",
  "Graphic design","Painting","Sculpting","Pottery Sewing","Knitting","Woodworking"
  ];

  musicList = ["Music","Guitar","Piano","Music composition","Singing","Songwriting",
  "Dancing","Filmmaking","Gaming","Chess","Poker","Board games","Pets",
  "Theater","Reading","Comic Books","Movies"
  ];

  cultureList = ["Culture","Travelling","Learning new languages","History"
  ];

  technologyList = ["Coding","Content creation","Videogame developing"
  ];

  mysticismList = ["Spirituality","Astrology","Cartomancy","Tarot","Palm reading"
  ];

  nightlifeList = ["Pub crawling","Gambling"
  ];

  foodList = ["Cooking","Baking","Wine"
  ];

  selectedList = [];
  backlist = [];

  visibleSports:boolean = false;
  visibleWelness:boolean = false;
  visibleOutdoor:boolean = false;
  visibleArt:boolean = false;
  visibleMusic:boolean = false;
  visibleCulture:boolean = false;
  visibleTechnology:boolean = false;
  visibleMythic:boolean = false;
  visibleNight:boolean = false;
  visibleFood:boolean = false;



  ngOnInit() {
    if(this.value.length != 0) {
      for (let value of this.value){
        if(!this.selectedList.includes(value)) {
            this.selectedList.push(value);
        }
      }
    }
  }

  dismiss() {
    this.modalCtrl.dismiss(this.backlist);
  }

  save() {
    this.modalCtrl.dismiss(this.selectedList);
  }


  selectInterest(input,list) {
    if(this.selectedList.length <= 4){
      if(!this.selectedList.includes(list[list.indexOf(input)])) {
        this.selectedList.push(list[list.indexOf(input)]);
        console.log(this.selectedList);
      }  
    }
    
  }

  removeInterest(input,list) {
    if(this.selectedList.includes(list[list.indexOf(input)])) {
      this.selectedList.splice(input,1);
      console.log(this.selectedList);
    }  
  }

  
  toggleSports() {
    this.visibleSports = !this.visibleSports
  }

  toggleWelness() {
    this.visibleWelness = !this.visibleWelness
  }

  toggleOutdoor() {
    this.visibleOutdoor = !this.visibleOutdoor
  }

  toggleArt() {
    this.visibleArt = !this.visibleArt
  }

  toggleMusic() {
    this.visibleMusic = !this.visibleMusic
  }

  toggleCulture() {
    this.visibleCulture = !this.visibleCulture
  }

  toggleTechnology() {
    this.visibleTechnology = !this.visibleTechnology
  }

  toggleMythic() {
    this.visibleMythic = !this.visibleMythic
  }

  toggleNight() {
    this.visibleNight = !this.visibleNight
  }

  toggleFood() {
    this.visibleFood = !this.visibleFood
  }



}