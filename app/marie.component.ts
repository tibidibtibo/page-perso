import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'marie',
    template: `
        <h1>{{title}}</h1>
        <h2>Forever Living Products</h2>
    `,
    styleUrls:  [ '../css/marie.component.css' ]
})

export class MarieComponent {
    title = 'Marie de Boissieu';
}



