import {
    Component, OnInit, Input, ViewEncapsulation, HostListener, EventEmitter, ViewChild,
    Output
} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
    @Input() private lang : string
    @Output() switchLang : EventEmitter<string> = new EventEmitter<string>()

    private _credentials: any

    public get credentials(){
        return this._credentials[this.lang]
    }

    @ViewChild("header") header : any
    @ViewChild("sticky_header") sticky_header : any

    constructor() {
        this._credentials = {
            en : {
                address: {
                    street: `13 street Germinal`,
                    zip: `31280`,
                    city: `Balma`
                },
                mail: `matthieu.beauvin@gmail.com`,
                phone: `+33 06 15 16 19 14`,
                driver: `Driver Licence - Vehicle`,
                languages: `English - Upper-Intermediate (B2)`,
                position : 'Full-Stack Developer - Junior Project Manager'
            },
            fr : {
                address: {
                    street: `2 rue du sergent Vigne`,
                    zip: `31500`,
                    city: `Toulouse`
                },
                mail: `matthieu.beauvin@gmail.com`,
                phone: `06 15 16 19 14`,
                driver: `Permis B - Véhicule`,
                languages: `Anglais - Autonome`,
                position : 'Développeur full-stack & mobile - Chef de projet junior'
            }
        }
    }

    ngOnInit() {

    }


    @HostListener("window:scroll", [])
    onWindowScroll() {
        if(window.pageYOffset >= this.header.nativeElement.offsetHeight - 75){
            this.sticky_header.nativeElement.classList.add("show")
        }
        else if(window.pageYOffset < this.header.nativeElement.offsetHeight - 75){
            this.sticky_header.nativeElement.classList.remove("show")
        }
    }

    toggleLang(lang : string){
        this.switchLang.emit(lang)
    }
}
