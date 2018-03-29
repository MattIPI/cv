import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

import { CVComponent } from './cv.component';
import {HeaderComponent} from './header/header.component';
import {SkillsComponent} from './skills/skills.component';
import {UiElementsModule} from "./ui-elements/ui-elements.module";
import { EducationComponent } from './education/education.component';
import { EducationItemComponent } from './education-item/education-item.component';
import { JobExperiencesComponent } from './job-experiences/job-experiences.component';
import { InterestsComponent } from './interests/interests.component';
import { LangSwitcherComponent } from './header/lang-switcher/lang-switcher.component';

@NgModule({
  declarations: [
      CVComponent,
      HeaderComponent,
      SkillsComponent,
      EducationComponent,
      EducationItemComponent,
      JobExperiencesComponent,
      InterestsComponent,
      LangSwitcherComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        UiElementsModule,
        MatTabsModule,
        MatDialogModule,
        MatCardModule
    ],
  providers: [],
  bootstrap: [CVComponent]
})
export class CVModule { }
