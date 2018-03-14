import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HttpModule } from '@angular/http';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';
import { ListingsListModule } from './listings-list/listings-list.module';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    ListingsListModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
