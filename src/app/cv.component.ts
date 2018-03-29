import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent {
  title = 'app';
  private lang = 'fr'

  setLang(lang : string) : void{
    this.lang = lang
  }
}
