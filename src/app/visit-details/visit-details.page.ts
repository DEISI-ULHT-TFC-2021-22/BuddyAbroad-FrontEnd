import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
//import {FireStorageService} from '../fire-storage.service';
import {HomeTripCardsModel} from '../shared/homeTripCards.model';
import {Observable, Subscription} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-visit-details',
    templateUrl: './visit-details.page.html',
    styleUrls: ['./visit-details.page.scss'],
})
export class VisitDetailsPage implements OnInit {

    public allTripCards: any = [];
    public card;
    public image;
    public tripName;
    public tripDescription;

    public trips: Observable<HomeTripCardsModel>;
    public trip: HomeTripCardsModel;
    public userName;
    public userDescription;
    public userRating;
    public userImage;
    public userLanguage;
    public userId;

    constructor(private router: Router, private navCtrl: NavController,
                //public fireStorageService: FireStorageService,
                private route: ActivatedRoute,
                private http: HttpClient) {                
                    route.params.subscribe(() => {
                        this.teste();
                    });
    }

    getAllTrips() {
        this.http.get<any[]>(`${environment.apiUrl}trips/`)
            .subscribe(response => {
                response.forEach(card => {
                    /*if(card.id === tripId) {
                        console.log(card);
                        this.image = card.imageURL;
                        this.tripName = card.name;
                        this.tripDescription = card.description;
                    }*/
                    this.allTripCards.push(card);
                });                
            }
        );         
        //console.log(this.allTripCards);           
    }

    teste() {
        const tripId: string = this.route.snapshot.paramMap.get('id');
        
        this.allTripCards.forEach(trip => {
            console.log('ok');
            if(trip.id === tripId) {
                this.image = trip.imageURL;
                this.tripName = trip.name;
                this.tripDescription = trip.description;
            }
        }); 
    }

    ngOnInit() {
        //const tripId: string = this.route.snapshot.paramMap.get('id');
        
        this.getAllTrips();
        
        //console.log(this.allTripCards);        

        /*
        this.allTripCards.forEach(trip => {
            console.log('ok');
            if(trip.id === tripId) {
                this.card = trip;
                console.log(this.card);
            }
        });
        */


        /*

        relacionado com a firebase


        this.db.collection('users').get()
            .subscribe(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.trips = this.fireStorageService.getTripDetail(tripId, doc.id);
                    this.trips.forEach((element: HomeTripCardsModel) => {
                        if (element?.id === tripId) {
                            this.trip = element;
                            // after here
                            this.fireStorageService.getBuddyDocInfo(element?.createdBy).subscribe((data) => {
                                this.userName = data.name;
                                this.userDescription = data.description;
                                this.userRating = data.rating;
                                this.userImage = data.image;
                                this.userLanguage = data.languages;
                                this.userId = element?.createdBy;
                            });
                        }
                    });
                });
            });
            */
    }

    goback() {
        this.navCtrl.pop();
    }

}
