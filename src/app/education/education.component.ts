import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EducationComponent implements OnInit {
    @Input() private lang : string

  educationItems : any = {
      en : [
          {
              title:"High School diploma STI2D",
              speciality: "Digital and Information System",
              school: "High School PP.Riquet",
              year: 2013
          },
          {
              title:"BTS SIO",
              speciality: "Solutions Logicielles et Applications Métier",
              school: "Lycée PP.Riquet",
              year:2015
          },
          {
              title:"Diplôme BAC +3",
              speciality: "Licence Concepteur Développeur",
              school: "Ecole IPI (Groupe IGS)",
              year:2016
          },
          {
              title:"Diplôme Bac +5",
              speciality: "Chef de projet Ingénierie Logicielle",
              school: "Ecole IPI (Groupe IGS)",
              year:2018
          }
      ],
    fr : [
        {
            title:"Bac STI2D",
            speciality: "Systèmes d'Information et Numériques",
            school: "Lycée PP.Riquet",
            year: 2013
        },
        {
            title:"BTS SIO",
            speciality: "Solutions Logicielles et Applications Métier",
            school: "Lycée PP.Riquet",
            year:2015
        },
        {
            title:"Diplôme BAC +3",
            speciality: "Licence Concepteur Développeur",
            school: "Ecole IPI (Groupe IGS)",
            year:2016
        },
        {
            title:"Diplôme Bac +5",
            speciality: "Chef de projet Ingénierie Logicielle",
            school: "Ecole IPI (Groupe IGS)",
            year:2018
        }
    ]
  }

    private title : any = {
        en : "Education",
        fr : "Formations"
    }
    public get Title() : string{
        return this.title[this.lang]
    }


  constructor() { }

  ngOnInit() {
  }

  timelineClick(args){
      console.log("timeling clicked")
      console.dir(args)
  }
}
