import { Component, OnDestroy } from '@angular/core';
import { PreloaderService } from '../preloader';

@Component({
  selector: 'app-about',
  template: `
    <pre>{{ preloader.loading$ | async }}</pre>
    <img src="https://images.unsplash.com/photo-1495835788122-ca48931258be">
  `,
  styles: [`
    img {
      width: 100%;
    }
  `]
})
export class AboutComponent implements OnDestroy {

  constructor(public preloader: PreloaderService) {
    // 컴포넌트가 생성되면 페이지로 이동이 완료된 것이다. 이때 라우팅 간에 표시되었던 preloader를 감춘다.
    // this.preloader.hide();
    // 컴포넌트가 빠르게 활성화되면 preloader가 보이지 않으므로 테스트를 위해 1초간 delay한다.
    setTimeout(() => this.preloader.hide(), 1000);
  }

  ngOnDestroy() {
    // 다른 페이지로 이동하면 컴포넌트는 소멸된다. 이때 라우팅 간에 preloader를 표시한다.
    this.preloader.show();
  }

}
