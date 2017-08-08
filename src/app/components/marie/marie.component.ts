import { Component } from '@angular/core';
import { BackHomeComponent } from '../back-home/back-home.component';

@Component({
    moduleId: module.id.toString(),
    selector: 'marie',
    templateUrl: './marie.component.html',
    styleUrls:  [ '../../page-perso.component.scss', './marie.component.scss' ]
})

export class MarieComponent {
    title = 'Marie de Boissieu';
}
