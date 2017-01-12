// Dependencies 
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

// Modules
import { AppRoutingModule }     from './app-routing.module';

// Custom components
import { AppComponent }         from './app.component';
import { ThibaultComponent }         from './thibault.component';
import { MarieComponent }         from './marie.component';

@NgModule({
    imports:    [   
                        BrowserModule,
                        FormsModule,
                        HttpModule,
                        AppRoutingModule,
                ],
    declarations: [   
                        AppComponent,
                        ThibaultComponent,
                        MarieComponent
                    ],
    providers:  [
                ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }