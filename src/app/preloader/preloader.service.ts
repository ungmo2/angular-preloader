import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PreloaderService {

  private preloaderSubject = new BehaviorSubject<boolean>(true);
  loading$ = this.preloaderSubject.asObservable();

  show() {
    console.log('[SHOW]');
    this.preloaderSubject.next(true);
  }

  hide() {
    console.log('[HIDE]');
    this.preloaderSubject.next(false);
  }
}
