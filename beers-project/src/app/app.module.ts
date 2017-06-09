import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CanActivate } from '@angular/router';
import { MdCardModule} from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddBeerComponent } from './beer/add-beer/add-beer.component';
import { ListBeersComponent } from './beer/list-beers/list-beers.component';
import { InfoBeerComponent } from './beer/info-beer/info-beer.component';
import { SingleBeerComponent } from './beer/single-beer/single-beer.component';
import { NavComponent } from './nav/nav.component';
import { RouterService } from './router.service';
import { BeersService } from './beer/beers.service';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddBeerComponent,
    ListBeersComponent,
    InfoBeerComponent,
    SingleBeerComponent,
    NavComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomePageComponent },
      { path: 'single', component: SingleBeerComponent },
      { path: 'beers/:id', component: InfoBeerComponent, pathMatch: 'full'},
      { path: 'beer/add', component: AddBeerComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]),
  ],
  providers: [BeersService, RouterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
