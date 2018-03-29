import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RangeSliderComponent implements OnInit {
  @Input() name : string
  @Input() value : number
  @Input() image : string
  @Input() color : string

  constructor() { }

  ngOnInit() {
  }

}
