import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {debounceTime, Observable, Subscription} from 'rxjs';
import { environment } from 'src/environments/environment';
import {HomeTripCardsModel} from '../shared/homeTripCards.model';
import { ModalController } from '@ionic/angular';
import { VisitDetailsPage } from '../visit-details/visit-details.page';
import { compileInjectable } from '@angular/compiler';

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})

export class SearchPage implements OnInit {

    public allTripCards: any = [];

    constructor(
        private router: Router, 
        private route: ActivatedRoute, 
        private http: HttpClient,
        private modalCtrl: ModalController, 
        ) {
        /*route.params.subscribe(val => {
            this.getAllTrips()
        });*/
    }

    ngOnInit() {                
        this.getAllTrips();
    }

    getAllTrips() {
        this.http.get<any[]>(`${environment.apiUrl}trips/`)
            .subscribe(response => {
                response.forEach(card => {
                    this.allTripCards.push(card);
                });                
            });
            
        console.log(this.allTripCards);
    }
    
    async createTripCards(trip: any) {

        const modal = await this.modalCtrl.create({
            component: VisitDetailsPage,
            componentProps: { value: trip },
          });

        await modal.present();
    }

    async filterTrips(event) {        
        const searchTerm = event.srcElement.value;
            
        this.http.post<any>(`${environment.apiUrl}tripSearch/?format=json`, {
            'string': searchTerm,
        }).pipe(debounceTime(2000)).subscribe(response => {
            this.allTripCards.splice(0);
            response.forEach(card => {
                this.allTripCards.push(card);
            });
        }); 

        return this.allTripCards;
    }

    /*
    async ngOnInit() {
        await this.initializeItems();
    }

    async initializeItems(): Promise<any> {
        
        relacionado com a firebase

        await this.db.collection('users').get()
            .subscribe(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.getTargetUserTrips(doc.id);
                });
            });
        
        this.allHomeTripCardsBackup = this.allHomeTripCards;
        return this.allHomeTripCards;
    }

    async filterList(evt) {
        this.allHomeTripCards = this.allHomeTripCardsBackup;
        const searchTerm = evt.srcElement.value;

        if (!searchTerm) {
            return;
        }

        this.allHomeTripCards = this.allHomeTripCards.filter(currentTrip => {
            if (currentTrip.name && searchTerm) {
                return (currentTrip.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
            }
        });
    }

    public getTargetUserTrips(targetUser): Subscription {
       

        relacionado com a firebase

        return this.db.collection('users').doc(targetUser).collection<HomeTripCardsModel>('createdTrips').get()
            .subscribe(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.allHomeTripCards.push(doc.data());
                });
            });
            
        return;
    }
    */

}
