import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/home">Home</a>
      <a routerLink="/about">About</a>
    </nav>

    <app-preloader></app-preloader>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
