import { Component, OnInit } from '@angular/core';

import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  public imageSources: string[] = [
      './assets/Image0.jpg',
      './assets/Image1.jpg',
      './assets/Image2.jpg',
      './assets/Image3.jpg',
      './assets/Image4.jpg',
      './assets/Image5.jpg',
      './assets/Image6.jpg',
      './assets/Image7.jpg',
      './assets/Image8.jpg',
      './assets/Image9.jpg',
      './assets/Image10.jpg',
      './assets/Image11.jpg',
      './assets/Image12.jpg',
      './assets/Image13.jpg',
      './assets/Image14.jpg',
      './assets/Image15.jpg',
      './assets/Image16.jpg',
      './assets/Image17.jpg',
      './assets/Image18.jpg',
      './assets/Image19.jpg',
      './assets/Image20.jpg',
      './assets/Image21.jpg',
      './assets/Image22.jpg',
      './assets/Image23.jpg',
      './assets/Image24.jpg',
      './assets/Image25.jpg'
  ];

  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: true,
    autoplayDelay: 3000,
    stopAutoplayMinWidth: 768
  };

  ngOnInit() {
  }

}
