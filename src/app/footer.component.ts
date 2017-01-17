import { Component } from '@angular/core';

@Component({
    moduleId: module.id.toString(),
    selector: 'footer',
    templateUrl:    './footer.component.html',
    styleUrls:  [ './app.component.scss' ]
})

export class FooterComponent {

    toTop(): void {
        window.scrollTo(0,0);
    }
}
