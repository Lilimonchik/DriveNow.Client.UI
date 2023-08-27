import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

}

/*
let counter: number = 1;

setInterval(() => {
  const radioElement: HTMLInputElement | null = document.getElementById('radio' + counter) as HTMLInputElement;
  
  if (radioElement) {
    radioElement.checked = true;
  }
  
  counter++;
  
  if (counter > 4) {
    counter = 1;
  }
}, 5000);
*/