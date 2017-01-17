import { Component } from '@angular/core';
import { BackComponent } from './back.component';

@Component({
    moduleId: module.id.toString(),
    selector: 'thibault',
    templateUrl: './thibault.component.html',
    styleUrls:  [ './app.component.scss', './thibault.component.css' ]
})

export class ThibaultComponent {
    title = 'Thibault de Boissieu';
}
