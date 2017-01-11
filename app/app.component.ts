import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/marie" routerLinkActive="active">Marie</a>
            <a routerLink="/thibault" routerLinkActive="active">Thibault</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls:  [ '../css/app.component.css' ]
})

export class AppComponent {
    title = 'DE BOISSIEU';
}



