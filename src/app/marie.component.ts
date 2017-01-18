import { Component } from '@angular/core';
import { BackComponent } from './back.component';

@Component({
    moduleId: module.id.toString(),
    selector: 'marie',
    templateUrl: './marie.component.html',
    styleUrls:  [ './app.component.scss', './marie.component.scss' ]
})

export class MarieComponent {
    title = 'Marie de Boissieu';
}
