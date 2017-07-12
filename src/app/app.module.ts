// Dependencies 
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

// Modules
import { AppRoutingModule }     from './app-routing.module';

// Custom components
import { AppComponent }         from './app.component';
import { HomeComponent }        from './components/home/home.component';
import { BackComponent }        from './components/back/back.component';
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
                        AppComponent,
                        HomeComponent,
                        BackComponent,
                        FooterComponent,
                        HeaderComponent,
                        TpShuffleComponent,
                        ThibaultComponent,
                        MarieComponent
                    ],
    providers:  [
                ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
