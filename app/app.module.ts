// Dependencies 
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

// Modules
import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

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
