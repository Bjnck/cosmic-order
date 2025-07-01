import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MarvelComicsModule} from './marvelcomics/marvel-comics.module';
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {StarwarsModule} from './starwars/starwars.module';
import {MainComponent} from "./main.component";
import {TopbarModule} from "./topbar/topbar.module";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MarvelComicsModule,
    StarwarsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TopbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
