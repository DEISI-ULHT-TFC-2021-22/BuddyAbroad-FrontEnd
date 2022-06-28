import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { HomeTripCardsModel } from '../shared/homeTripCards.model';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ModalController } from '@ionic/angular';
import { VisitDetailsPage } from '../visit-details/visit-details.page';
import { ComponentProps, ModalOptions } from '@ionic/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    public allHomeTripCards: any = [];
    public allHomeTripCardsBackup: any = [];
    public labels: any = ['Local Culture', 'Sightseeing Tours']

    public allTripCards: any = [];

    slideOptions = {
        // initialSlide: 0,
        // slidesPerView: 1,
        // autoplay: true,
        // autoplayDisableOnInteraction: false
        slidesPerView: 1.2,
        centeredSlides: true,
        loop: true,
        spaceBetween: 10,
        autoplay: true,
    };

    user: any = [];

    constructor(private router: Router, private http: HttpClient, private modalCtrl: ModalController) {
    }

    ngOnInit() {
        this.http.get(`http://18.171.19.26/usersEmail/${localStorage.getItem('email')}`)
            .subscribe(data => {
                console.log(data)
                this.user = data;
                localStorage.setItem('userId', this.user.id)
            })
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

    async createTripCards(trip: any) {

        const modal = await this.modalCtrl.create({
            component: VisitDetailsPage,
            componentProps: { value: trip },
        });

        await modal.present();
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
