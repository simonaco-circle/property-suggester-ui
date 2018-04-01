import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ListingsComponent } from './listings-list/listings/listings.component';

const routes: Routes = [
  { path: '', component: ListingsComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
