import { Component, OnInit }    from '@angular/core';
import { AlertService }         from './services/alert/alert.service';
import { AlertBoxComponent }    from './components/alert-box/alert-box.component';
import { IAlert }               from './models/alert.interface';

@Component({
    moduleId: module.id.toString(),
    selector: 'page-perso',
    templateUrl: './page-perso.component.html',
    styleUrls:  [ './page-perso.component.scss' ],
    providers: [AlertService]
})

export class PagePersoComponent implements OnInit {
    title = 'de-boissieu.fr';

    constructor(private alertService: AlertService) { };

    displayInfoCookies(): void {
        console.log("TEST");
        this.alertService.displayMessage('warning', 'Ce site n\'utilise aucun cookies !');
    }

    ngOnInit(): void {
        this.displayInfoCookies();
    }
}
