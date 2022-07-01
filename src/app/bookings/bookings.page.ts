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

    bookingIds : any = [];
    tripsIds : any = [];

    public allTripsCards: any = [];
    public trips: any = [];
    public favTrips: any = [];
    public favTripsId: any = [];


    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
        //  route.params.subscribe(() => {
        //     this.type = 'pending'
        //     this.allTripsCards.splice(0);
        //     this.sync()
        //  });
    }


    deleteFavourites(pos) {
        let index = this.favTripsId[pos]

        this.http.delete(`${environment.apiUrl}deleteUserFavourites/${index}`)
            .subscribe(response => {
                console.log(response)
                if(response == 200) {
                    this.favTrips.forEach(card => {
                        if(card.id === this.favTripsId[pos]) {
                            this.favTrips.splice(card)
                        }
                    })
                }
            })
            setTimeout(() => window.location.reload(),500)
    }

    deleteBooking(pos) {
        let index = this.bookingIds[pos]
        console.log(this.bookingIds[pos])
        this.http.delete(`${environment.apiUrl}userTrips/${index}`)
            .subscribe(response => {
                console.log(response)
                if(response == 200) {
                    this.allTripsCards.forEach(card => {
                        if(card.id === this.tripsIds[pos]) {
                            this.allTripsCards.splice(card)
                        }
                    })
                }
            })
            setTimeout(() => window.location.reload(),500)
    }


    sync() {
        let userId = localStorage.getItem('userId');

        this.http.get<any>(`${environment.apiUrl}tripsUserBookings/${userId}`)
            .subscribe(response => {
                response.forEach(card => {
                    this.allTripsCards.push(card);
                });  

                for(let i = 0; i < this.allTripsCards.length; i++) {
                    let obj = this.allTripsCards[i];
                
                    this.tripsIds.push(obj.id);
                }
            }
        );

  

        this.http.get<any>(`${environment.apiUrl}userBookings/${userId}`)
            .subscribe(response => {
                this.trips = response

                for(let i = 0; i < this.trips.length; i++) {
                    let obj = this.trips[i];
                
                    this.bookingIds.push(obj.id);
                }
            }
        );

        this.http.get<any>(`${environment.apiUrl}getTripsFavourites/${userId}`)
            .subscribe(response => {
                if(response.length > 0) {
                    response.forEach(obj => {
                        this.favTrips.push(obj);
                    });
                }
            }
        );
        
        this.http.get<any>(`${environment.apiUrl}getObjectFavourites/${userId}`)
            .subscribe(response => {
                if(response.length > 0) {
                    response.forEach(obj => {
                        this.favTripsId.push(obj.id);
                    });
                }
            }
        );
        
        
        console.log(this.favTrips)
        //console.log(this.bookingIds)
    }

    ngOnInit() {

    }

    ionViewWillEnter() {
            this.type = 'pending'
            this.allTripsCards.splice(0)
            this.bookingIds.splice(0)
            this.favTrips.splice(0);
            this.sync()
            console.log(this.bookingIds)
    }

    
}
