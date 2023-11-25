import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  styleUrls: ['./carousel.component.scss'],
  templateUrl: './carousel.component.html'
})

export class CarouselComponent {

  public slides = [
      {
        src: '/assets/images/lambo.png'
      },
      {
        src: '/assets/images/mclaren.png'
      },
      {
        src: '/assets/images/countach.png'
      },
      {
        src: '/assets/images/aston-martin.png'
      }
  ];
}