import { Component } from '@angular/core';
import { Nav } from './nav.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/listings',
      name: 'Listings',
      exact: false
    }
  ];
}
