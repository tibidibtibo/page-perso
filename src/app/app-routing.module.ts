import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThibaultComponent } from './components/thibault/thibault.component';
import { MarieComponent } from './components/marie/marie.component';
import { HomeComponent } from './components/home/home.component';

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
