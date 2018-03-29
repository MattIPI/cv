import {Component, HostListener, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InterestsComponent implements OnInit {

    public bottom = false

    @HostListener('window:scroll', ['$event'])
    doSomething(event) {
        let pos = (document.documentElement.scrollTop || document.body.scrollTop);
        let max = document.documentElement.scrollHeight;
        // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
        max = max - 800

        this.bottom = false
        if(pos >= max ){
            this.bottom = true
        }
    }

  constructor() { }

  ngOnInit() {
  }

}
