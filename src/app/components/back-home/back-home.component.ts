import { Component } from '@angular/core';

@Component({
    moduleId: module.id.toString(),
    selector: 'back-home',
    template: `
        <div class="back-component">
            <a routerLink="/home" routerLinkActive="active">← Accueil</a>
        </div>
    `,
    styleUrls:  [ '../../page-perso.component.scss' ]
})

export class BackHomeComponent {
}
