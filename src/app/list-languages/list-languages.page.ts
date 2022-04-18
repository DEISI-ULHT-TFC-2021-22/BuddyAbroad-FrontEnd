import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-list-languages',
  templateUrl: './list-languages.page.html',
  styleUrls: ['./list-languages.page.scss'],
})
export class ListLanguagesPage implements OnInit {

  @Input("value") value;

  constructor(private modalCtrl: ModalController) { }

  languagesList = ["Mandarin","Spanish","English","Hindi","Bengali","Portuguese",
  "Russian","Japanese","Turkish","Korean","French","German","Vietnamese","Italian",
  "Arabic","Polish","Romanian","Dutch","Tagalog","Greek","Hungarian","Finnish",
  "Swedish","Icelandic","Czech","Latin","Serbian","Croatian","Danish","Norwegian",
  "Ukrainian","Bulgarian","Albanian","Hebrew","Swahili","Korean","Indonesian",
  "Esperanto","Mongolian","Persian","Gaelic","Thai","Belarussian","Lithuanian",
  "Estonian","Latvian","Afrikaans","Georgian"
  ];

  selectedList = [];
  backlist = [];

  visibleLanguages:boolean = true;

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


selectLanguage(input,list) {
  if(this.selectedList.length <= 4){
    if(!this.selectedList.includes(list[list.indexOf(input)])) {
      this.selectedList.push(list[list.indexOf(input)]);
      console.log(this.selectedList);
    }  
  }
  
}

removeLanguage(input,list) {
  if(this.selectedList.includes(list[list.indexOf(input)])) {
    this.selectedList.splice(input,1);
    console.log(this.selectedList);
  }  
}


toggleLanguages() {
  this.visibleLanguages = !this.visibleLanguages
}


}
