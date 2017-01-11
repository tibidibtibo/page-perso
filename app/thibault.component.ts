import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'thibault',
    template: `
        <h1>{{title}}</h1>
        <h2>Full-Stack developper</h2>
    `,
    styleUrls:  [ '../css/thibault.component.css' ]
})

export class ThibaultComponent {
    title = 'Thibault de Boissieu';
}
