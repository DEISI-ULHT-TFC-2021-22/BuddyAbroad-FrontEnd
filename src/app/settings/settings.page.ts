import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CustomTranslateService } from '../shared/services/custom-translate.service';

import { environment } from 'src/environments/environment';

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
    localStorage.setItem('previous-lang', localStorage.getItem('lang'));
    localStorage.setItem('lang', this.language);
    this.customTranslateService.currentLang.next(this.language);
  }

}
