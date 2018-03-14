import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { ListingsService } from './listings/listings.service';
import { RouterModule, Routes } from '@angular/router';
import { ListingsComponent } from './listings/listings.component';
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
    RouterModule.forChild(routes)
  ],
  declarations: [ListingsComponent],
  providers: [ListingsService]
})
export class ListingsListModule {}
