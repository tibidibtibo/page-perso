import { Component } from '@angular/core';
import { BackHomeComponent } from '../back-home/back-home.component';
import { TpShuffleComponent } from '../tp-shuffle/tp-shuffle.component';

@Component({
    moduleId: module.id.toString(),
    selector: 'thibault',
    templateUrl: './thibault.component.html',
    styleUrls:  [ '../../page-perso.component.scss', './thibault.component.scss' ]
})

export class ThibaultComponent {
    title = 'Thibault de Boissieu';
}
