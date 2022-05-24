import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {HomeTripCardsModel} from '../shared/homeTripCards.model';
import {map, switchMap, takeUntil} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    public allHomeTripCards: any = [];
    public allHomeTripCardsBackup: any = [];
    public labels: any =['Local Culture','Sightseeing Tours']

    public allTripCards: any = [];



    constructor(private router: Router, private http: HttpClient) {
    }

    ngOnInit() {
        //await this.initializeItems();
        this.getAllTrips();
    }

    getAllTrips() {
        this.http.get<any[]>(`${environment.apiUrl}trips/`)
            .subscribe(response => {
                response.forEach(card => {
                    this.allTripCards.push(card);
                });                
            });
            
        //console.log(this.allTripCards);
    }

    teste() {
        this.http.post(`${environment.apiUrl}postTripImage/`, {
            "file": "/assets/toptrip1.jpg"
        }).subscribe(response => {
            console.log(response);
        });
    }

/*
    async initializeItems(): Promise<any> {
        await this.db.collection('users').get()
            .subscribe(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.getTargetUserTrips(doc.id);
                });
            });
        this.allHomeTripCardsBackup = this.allHomeTripCards;
        return this.allHomeTripCards;
        // return
    }

    public getTargetUserTrips(targetUser): Subscription {
        return this.db.collection('users').doc(targetUser).collection<HomeTripCardsModel>('createdTrips').get()
            .subscribe(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.allHomeTripCards.push(doc.data());
                    this.allHomeTripCards.sort((a, b) => a.rating - b.rating); // Ascending sort
                    this.allHomeTripCards.reverse()
                });
            });
    }*/
}
