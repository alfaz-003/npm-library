import { Component } from '@angular/core';

@Component({
  selector: 'lib-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter:number = 0;

  incrDecrCounter(counter:number,incr:boolean) {
    if(!incr) {
      this.counter = counter-=1;
    } else {
      this.counter = counter+=1;
    }
    if(this.counter < 0) {
      this.counter = 0;
    }
  }
}
