import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpModule } from '@angular/http';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';
import { ListingsListModule } from './listings-list/listings-list.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, HomeComponent],
  imports: [
    BrowserModule,
    ListingsListModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
