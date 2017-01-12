import { Component } from '@angular/core';

@Component({
    selector: 'marie',
    template: `
        <h1>{{title}}</h1>
        <h2>Forever Living Products</h2>
    `,
    styleUrls:  [ './app.component.scss', './marie.component.css' ]
})

export class MarieComponent {
    title = 'Marie de Boissieu';
}



