import {Component, Input, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {HomeTripCardsModel} from '../shared/homeTripCards.model';
import {Observable, Subscription} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-visit-details',
    templateUrl: './visit-details.page.html',
    styleUrls: ['./visit-details.page.scss'],
})
export class VisitDetailsPage implements OnInit {

    @Input() value: any;

    public trip;

    public allTripCards: any = [];
    public card;
    public image;
    public tripName;
    public tripDescription;

    //public trips: Observable<HomeTripCardsModel>;
    //public trip: HomeTripCardsModel;
    public userName;
    public userDescription;
    public userRating;
    public userImage;
    public userLanguage;
    public userId;

    constructor(private router: Router, private navCtrl: NavController,
                private route: ActivatedRoute,
                private http: HttpClient,
                private modalCtrl: ModalController) {

    }

    teste() {
        this.router.navigate(['home'])
        // this.router.navigate(['bookings', this.trip.id])
    }


    async close() {
        await this.modalCtrl.dismiss();
    }

    ngOnInit() {
        //const tripId: string = this.route.snapshot.paramMap.get('id');
        
   
        this.trip = this.value;


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
