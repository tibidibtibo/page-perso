import { Injectable }           from '@angular/core';
import { IAlert }               from '../../models/alert.interface';
import { AlertBoxComponent }    from '../../components/alert-box/alert-box.component';

@Injectable()
export class AlertService {

    displayMessage(type: string, message: string): void {

        let alerts: Array<IAlert> = [];
        let writeAlert: IAlert = {
            id: 1,
            type: type,
            message: message
        };
        alerts.push(writeAlert);

        let alertBox: AlertBoxComponent = new AlertBoxComponent();
        alertBox.addAlert(alerts);
    };
}
