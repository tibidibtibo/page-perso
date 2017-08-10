import { Input, Component } from '@angular/core';
import { IAlert } from '../../models/alert.interface';

@Component({
    moduleId: module.id.toString(),
    selector: 'alert-box',
    templateUrl: './alert-box.component.html',
    styleUrls: ['../../page-perso.component.scss', './alert-box.component.scss']
})

export class AlertBoxComponent {
    
    public alerts: Array<IAlert> = [];

    private backup: Array<IAlert>;

    constructor() {    };

    public addAlert(newAlerts: Array<IAlert>) {
        this.alerts = newAlerts;
        this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
    }

    public closeAlert(alert: IAlert) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    public reset() {
        this.alerts = this.backup.map((alert: IAlert) => Object.assign({}, alert));
    }

}

