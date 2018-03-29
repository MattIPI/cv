import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {RangeSliderComponent} from "../ui-elements/range-slider/range-slider.component";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent implements OnInit {
    @Input() private lang : string

    position = 'before';
    private _skills = [
        {
            name:"Angular",
            value:75,
            color:"#c93f42",
            image:"assets/images/angular.png"
        },
        {
            name:"Typescript / Javascript",
            value:80,
            color:"#c93f42",
            image:"assets/images/js-ts.png"
        },
        {
            name:"Nativescript",
            value:75,
            color:"#c93f42",
            image:"assets/images/NativeScript_logo.png"
        },
        {
            name:"Node JS",
            value:30,
            color:"#c93f42",
            image:"assets/images/nodejs.png"
        },
        {
            name:"Ionic",
            value:60,
            color:"#c93f42",
            image:"assets/images/ionic-logo.png"
        },
        {
            name:"PHP",
            value:66,
            color:"#c93f42",
            image:"assets/images/php-logo.png"
        },
        {
            name:"SQL",
            value:50,
            color:"#c93f42",
            image:"assets/images/MySQL-Logo.png"
        },
        {
            name:"Code Igniter",
            value:50,
            color:"#c93f42",
            image:"assets/images/codeigniter.png"
        },
        {
            name:"Prestashop",
            value:45,
            color:"#c93f42",
            image:"assets/images/Prestashop-logo.png"
        },
        {
            name:"HTML / CSS",
            value:95,
            color:"#c93f42",
            image:"assets/images/htmlcss.png"
        },
        {
            name:"SASS",
            value:30,
            color:"#c93f42",
            image:"assets/images/logo-sass.svg"
        },
        {
            name:"Wordpress",
            value:85,
            color:"#c93f42",
            image:"assets/images/wordpress-logo.png"
        },
        {
            name:"C Sharp",
            value:45,
            color:"#c93f42",
            image:"assets/images/csharp-logo.png"
        }
    ]

    public get skills(){
        return this._skills
    }

    private title : any = {
        en : "IT skills",
        fr : "Compétences IT"
    }
    public get Title() : string{
        return this.title[this.lang]
    }

    constructor() { }

    ngOnInit() {
    }

}
