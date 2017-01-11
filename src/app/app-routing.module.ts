import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThibaultComponent } from './thibault.component';
import { MarieComponent } from './marie.component';

const routes: Routes = [
    { path: 'thibault', component: ThibaultComponent },
    { path: 'marie', component: MarieComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
