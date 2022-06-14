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

    public trip;
    public tripId = this.route.snapshot.paramMap.get('id');

    // public allBookedTripsCards: any = [
    //     {
    //         id: '0',
            
    //     }
    // ]

    constructor(private router: Router, private route: ActivatedRoute, private htttp: HttpClient) {
    }

    ngOnInit() {
        // this.type = 'booked';
        //this.homeTripCards = this.fireStorageService.getUserBookedTrips();        

        this.htttp.get(`${environment.apiUrl}trips/${this.tripId}`)
            .subscribe(data => {
                this.trip = data;
            });

    }
}
