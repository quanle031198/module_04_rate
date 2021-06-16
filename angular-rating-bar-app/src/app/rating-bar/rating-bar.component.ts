
import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

import { IRatingUnit } from '../i-rating-unit';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {

  @Input() max =10;
  @Input() ratingValue = 2;
  @Input() showRatingValue = true;

  ratingUnits: Array<IRatingUnit> = [];
  constructor() { }

  calculate(max:any, ratingValue:any) {
    this.ratingUnits = Array.from({length: max},
      (_, index) => ({
        value: index + 1,
        active: index < ratingValue
      }));
  }
  ngOnInit(): void {
    this.calculate(this.max, this.ratingValue);
  }

  enter(index: number){
    this.ratingUnits.forEach((item,idx) => item.active = idx <= index);
  }
  select(index: number){
    this.ratingValue = index +1;
    this.ratingUnits.forEach((item,idx) => item.active = idx < this.ratingValue);

  }
  reset(){
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
  }
}
