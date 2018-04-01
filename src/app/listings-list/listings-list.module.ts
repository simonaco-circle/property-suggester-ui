import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AgmCoreModule } from '@agm/core';

import { ListingsService } from './listings/listings.service';
import { RouterModule, Routes } from '@angular/router';
import { ListingsComponent } from './listings/listings.component';
import { SearchComponent } from './search/search.component';
const routes = [
  {
    path: 'listings',
    children: [{ path: '', component: ListingsComponent }]
  }
];
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBPWcL09h0Zqug5FwEs_A8Mbwg0KJArq8k'
    })
  ],
  declarations: [ListingsComponent, SearchComponent],
  providers: [ListingsService]
})
export class ListingsListModule {}
