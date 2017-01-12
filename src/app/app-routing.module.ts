import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThibaultComponent } from './thibault.component';
import { MarieComponent } from './marie.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'thibault', component: ThibaultComponent },
    { path: 'marie', component: MarieComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
