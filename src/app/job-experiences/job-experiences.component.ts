import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {CardComponent} from "../ui-elements/card/card.component";
import * as job_experiencs from "../../assets/data/job-experiences"

@Component({
    selector: 'app-job-experiences',
    templateUrl: './job-experiences.component.html',
    styleUrls: ['./job-experiences.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class JobExperiencesComponent implements OnInit {
    public master_experiences = job_experiencs.master
    public DigeekInternship = job_experiencs.DigeekInternship
    public DarmanInternship = job_experiencs.DarmanInternship

    constructor(public dialog: MatDialog) {
    }

    ngOnInit() {

    }


    openDialog(experience): void {
        let dialogRef = this.dialog.open(CardComponent, {
            width: '33%',
        });

        dialogRef.componentInstance.myData = experience

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed')
        });
    }
}