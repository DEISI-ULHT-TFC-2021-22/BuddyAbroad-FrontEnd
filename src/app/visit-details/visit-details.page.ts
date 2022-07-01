import {Component, Input, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {HomeTripCardsModel} from '../shared/homeTripCards.model';
import {Observable, Subscription} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ModalController } from '@ionic/angular';
import { runInThisContext } from 'vm';
import { ThrowStmt } from '@angular/compiler/src/output/output_ast';
import { ToastController } from '@ionic/angular';

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
    public favTripsId: any = [];
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
        private modalCtrl: ModalController,
        private toastCtrl: ToastController,
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

    async existingTripFav() {
        const toast = await this.toastCtrl.create({
            message: 'This trip is already in favourites!',
            duration: 2500,
            position: 'top'
        });
        toast.present();
    }

    addToFavourites() {
        document.querySelector('.favourite').setAttribute('name', 'star');

        this.http.post<any>(`${environment.apiUrl}postUserFavourites/`, {
            "user_id": this.userId,
            "trip_id": this.trip.id
        }).subscribe(response => {
            console.log(response)
            
            if(response.msg == 'Esta trip já se encontra nos favoritos') {
                this.existingTripFav();
            } else {
                this.close();
            }
        });
            
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

    // getIconName(): string{
    //     this.http.get<any>(`${environment.apiUrl}getObjectFavourites/${this.userId}`)
    //         .subscribe(response => {
    //             if(response.length > 0) {
    //                 response.forEach(object => {
    //                     if(object.trip_id === this.trip.id) {
    //                         return 'star';
    //                     } else {
    //                         return 'star-outline';
    //                     }
    //                 });
    //             } else {
    //                 return 'star-outline';
    //             }
    //         }
    //     );

    //     return 'star-outline';
    // }

    async close() {
        await this.modalCtrl.dismiss();
    }

    ngOnInit() {
        this.trip = this.value;
    }

    goback() {
        this.navCtrl.pop();
    }

}
