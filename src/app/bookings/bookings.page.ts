import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';



@Component({
    selector: 'app-bookings',
    templateUrl: './bookings.page.html',
    styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
    //public homeTripCards;
    type: string;

    public allBookedTripsCards: any = [
        {
            id: '0',
            
        }
    ]

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.type = 'booked';
        //this.homeTripCards = this.fireStorageService.getUserBookedTrips();
    }
}
