import { Component } from '@angular/core';
import { PreloaderService } from './preloader.service';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent {
  active: boolean;

  constructor(public preloader: PreloaderService) {
    preloader.loading$
      .subscribe(status => this.active = status);
  }
}
