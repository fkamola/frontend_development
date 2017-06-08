import { Component } from '@angular/core';
import { Beer } from './beer/beer';
import { MdCardModule } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'beers';

  constructor(){ }
  ngOnInit(){ }

}
