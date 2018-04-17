import { Component, OnInit, OnDestroy } from '@angular/core';

import { PreloaderService } from '../preloader';
import { DataService } from './../data.service';

@Component({
  selector: 'app-home',
  template: `
    <pre>{{data | json }}</pre>
  `
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'app';
  data: any;

  constructor(
    public preloader: PreloaderService,
    public dataService: DataService) {
    // 컴포넌트가 생성되면 페이지로 이동이 완료된 것이다. 이때 라우팅 간에 표시되었던 preloader를 감춘다.
    this.preloader.hide();
  }

  ngOnInit() {
    // 서버에게 데이터를 요청하기 이전에 preloader를 표시한다.
    this.preloader.show();

    this.dataService.getPlanets()
      .subscribe(res => {
        this.data = res;
        // 서버로부터 데이터를 전달받으면 preloader를 감춘다.
        this.preloader.hide();
      });
  }

  ngOnDestroy() {
    // 다른 페이지로 이동하면 컴포넌트는 소멸된다. 이때 라우팅 간에 preloader를 표시한다.
    this.preloader.show();
  }
}
