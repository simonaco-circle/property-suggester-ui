import { Component, OnInit } from '@angular/core';
import { ListingsService } from './listings.service';
import { Listing } from './listing';
import { ListingResponse } from './listingResponse';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  listings: ListingResponse;
  constructor(private listingService: ListingsService) {}

  ngOnInit() {
    this.listingService
      .getListings('Angel', 'rent', 'age', 450, '2')
      .subscribe(data => {
        console.log(data);
        this.listings = data.listings;
      });
  }
}
