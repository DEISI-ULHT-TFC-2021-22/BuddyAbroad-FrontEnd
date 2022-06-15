import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-bookings',
    templateUrl: './bookings.page.html',
    styleUrls: ['./bookings.page.scss'],
})

export class BookingsPage implements OnInit {
    //public homeTripCards;
    type: string;

    public allTripsCards: any = [];


    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
        // route.params.subscribe(() => {
        //     this.sync()
        // });
    }


    deleteBooking(tripId) {
        this.http.delete(`${environment.apiUrl}userTrips/${tripId}`)
            .subscribe(response => {
                console.log(response)
                if(response.status === 200) {
                    this.allTripsCards.forEach(card => {
                        if(card.id === tripId) {
                            this.allTripsCards.splice(card)
                        }
                    })
                }
            })
    }

    sync() {
        let userId = localStorage.getItem('userId');

        this.http.get<any>(`${environment.apiUrl}tripsUserBookings/${userId}`)
            .subscribe(response => {
                response.forEach(card => {
                    this.allTripsCards.push(card);
                });  
            }
        );
    }

    ngOnInit() {
        this.type = 'pending'
        this.allTripsCards.splice(0);
        this.sync()
    }
}
