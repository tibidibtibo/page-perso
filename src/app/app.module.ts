// Dependencies
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

// Modules
import { AppRoutingModule }     from './app-routing.module';

// Custom components
import { PagePersoComponent }         from './page-perso.component';
import { HomeComponent }        from './components/home/home.component';
import { BackHomeComponent }        from './components/back-home/back-home.component';
import { TpShuffleComponent }   from './components/tp-shuffle/tp-shuffle.component';
import { ThibaultComponent }    from './components/thibault/thibault.component';
import { MarieComponent }       from './components/marie/marie.component';
import { FooterComponent }       from './components/footer/footer.component';
import { HeaderComponent }       from './components/header/header.component';

@NgModule({
    imports:    [
                        BrowserModule,
                        FormsModule,
                        HttpModule,
                        AppRoutingModule,
                ],
    declarations: [
                        PagePersoComponent,
                        HomeComponent,
                        BackHomeComponent,
                        FooterComponent,
                        HeaderComponent,
                        TpShuffleComponent,
                        ThibaultComponent,
                        MarieComponent
                    ],
    providers:  [
                ],
    bootstrap:    [ PagePersoComponent ]
})

export class AppModule { }
