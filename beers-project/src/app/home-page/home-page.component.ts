import { Component, OnInit } from '@angular/core';
import { Beer } from './../beer/beer';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  constructor() { }

  beers: any[] = [];
  
  ngOnInit() {

    let beer1 = new Beer(1,'Imperium Atakuje','Pinta','Imperial India Pale Ale','81 IBU','7,8%', 'Przepelnione chmielem mocne piwo w stylu Imperial IPA');
    
    this.beers.push(beer1);


  }

}
