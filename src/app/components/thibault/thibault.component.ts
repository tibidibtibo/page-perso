import { Component } from '@angular/core';
import { BackComponent } from '../back/back.component';
import { TpShuffleComponent } from '../tp-shuffle/tp-shuffle.component';

@Component({
    moduleId: module.id.toString(),
    selector: 'thibault',
    templateUrl: './thibault.component.html',
    styleUrls:  [ '../../app.component.scss', './thibault.component.scss' ]
})

export class ThibaultComponent {
    title = 'Thibault de Boissieu';
}
