import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RangeSliderComponent} from "./range-slider/range-slider.component";
import {MatSliderModule} from '@angular/material/slider';
import { CardComponent } from './card/card.component';
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        MatSliderModule,
        MatButtonModule,
        MatListModule
    ],
    declarations: [
      RangeSliderComponent,
      CardComponent
    ],
    exports:[
        RangeSliderComponent,
        CardComponent
    ],
    entryComponents: [CardComponent]
})
export class UiElementsModule { }
