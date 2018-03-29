import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EducationItemComponent implements OnInit {
  @Input() title : string;
  @Input() speciality : string;
  @Input() school : string;
  @Input() year : string;

  constructor() { }

  ngOnInit() {
  }

}
