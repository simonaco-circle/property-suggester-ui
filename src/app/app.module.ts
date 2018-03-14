import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HttpModule } from '@angular/http';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListingsComponent } from './listings/listings.component';
import { ListingsService } from './listings/listings.service';

@NgModule({
  declarations: [AppComponent, ListingsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpModule
  ],
  providers: [ListingsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
