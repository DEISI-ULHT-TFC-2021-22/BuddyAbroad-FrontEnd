import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CustomTranslateService } from '../shared/services/custom-translate.service';

import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})

export class SettingsPage implements OnInit {
  language: string = this.customTranslateService.currentLang.value;

  constructor(private router: Router, 
    private customTranslateService: CustomTranslateService,
    private http: HttpClient) { }

  ngOnInit() {
  }

  changeLanguage() {
    /*localStorage.setItem('previous-lang', localStorage.getItem('lang'));
    localStorage.setItem('lang', this.language);
    this.customTranslateService.currentLang.next(this.language);*/
    console.log(this.teste());
    

  }

  teste() {
    this.http.post(`${environment.apiUrl}translate/`, {
      text: "hello world",
      sourceLanguageCode: 'en',
      targetLanguageCode: 'pt',
      // sourceLanguageCode: this.currentLang.value,
      // targetLanguageCode: 'en',
    }).pipe(map((result: Response) => result.json()));
  }

}
