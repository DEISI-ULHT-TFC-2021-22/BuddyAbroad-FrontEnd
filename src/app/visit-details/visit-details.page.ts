import {Component, Input, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {HomeTripCardsModel} from '../shared/homeTripCards.model';
import {Observable, Subscription} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ModalController } from '@ionic/angular';
import { runInThisContext } from 'vm';

@Component({
    selector: 'app-visit-details',
    templateUrl: './visit-details.page.html',
    styleUrls: ['./visit-details.page.scss'],
})
export class VisitDetailsPage implements OnInit {

    @Input() value: any;

    public trip;
    public userId;
    public buddy;
    public buddies: any = [];

    public allTripCards: any = [];
    // public card;
    // public image;
    // public tripName;
    // public tripDescription;

    // //public trips: Observable<HomeTripCardsModel>;
    // //public trip: HomeTripCardsModel;
    // public userName;
    // public userDescription;
    // public userRating;
    // public userImage;
    // public userLanguage;
    // public userId;

    constructor(
        private router: Router, private navCtrl: NavController,
        private route: ActivatedRoute,
        private http: HttpClient,
        private modalCtrl: ModalController
        ) {
        this.userId = localStorage.getItem('userId') || {}        
    }

    bookingTrip() {
        this.http.post<any>(`${environment.apiUrl}postUserTrips`, {
            'paidprice': this.trip.price,
            'date': '2022-02-07',
            'time': '16:20',
            'status': 'pending',
            'groupsize': this.trip.maxsize,
            'guide': '1',
            'tourist': this.userId,
            'reference': this.trip.id
        }).subscribe(response => {
            console.log(response)
        });

        this.close();
    }

    addToFavourites() {
        this.http.post<any>(`${environment.apiUrl}postUserTrips`, {
            'paidprice': this.trip.price,
            'date': '2022-02-07',
            'time': '16:20',
            'status': 'pending',
            'groupsize': this.trip.maxsize,
            'guide': '1',
            'tourist': this.userId,
            'reference': this.trip.id
        }).subscribe(response => {
            console.log(response)
        });

        this.close();
    }

    // getBuddy() {
    //     this.http.get<any>(`${environment.apiUrl}users/`)
    //         .subscribe(response => {
    //             response.forEach(buddy => {
    //                 this.buddies.push(buddy)
    //             })
    //         }
    //     );
        
    // }

    async close() {
        await this.modalCtrl.dismiss();
    }

    ngOnInit() {
        //const tripId: string = this.route.snapshot.paramMap.get('id');
   
        this.trip = this.value;

        // this.http.get<any>(`${environment.apiUrl}users/`)
        //     .subscribe(response => {
        //         response.forEach(buddy => {
        //             this.buddies.push(buddy)
        //         })
        //     }
        // );

        // this.buddies.forEach(buddy => {
        //     console.log(buddy)
        //     if(buddy.guide) {
        //         this.buddy = buddy;
        //     }
        // });

        // console.log(this.buddy)

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
