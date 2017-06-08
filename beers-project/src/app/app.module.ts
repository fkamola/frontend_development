import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BeerComponent } from './beer/beer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddBeerComponent } from './beer/add-beer/add-beer.component';
import { ListBeersComponent } from './beer/list-beers/list-beers.component';
import { InfoBeerComponent } from './beer/info-beer/info-beer.component';
import { SingleBeerComponent } from './beer/single-beer/single-beer.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    HomePageComponent,
    AddBeerComponent,
    ListBeersComponent,
    InfoBeerComponent,
    SingleBeerComponent,
    NavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
