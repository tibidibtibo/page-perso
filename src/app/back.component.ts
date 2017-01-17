import { Component } from '@angular/core';

@Component({
    moduleId: module.id.toString(),
    selector: 'back',
    template: `
        <div class="back-component"><a routerLink="/home" routerLinkActive="active">← Accueil</a></div>
    `,
    styleUrls:  [ './app.component.scss' ]
})

export class BackComponent {
}
