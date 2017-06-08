import { Component, OnInit, Input } from '@angular/core';
import { BeersService} from './../beers.service';

@Component({
  selector: 'app-single-beer',
  templateUrl: './single-beer.component.html',
  styleUrls: ['./single-beer.component.scss'],
  host: {'class': 'col-md-4'}
})

export class SingleBeerComponent implements OnInit {

  @Input() beer: any;

  constructor(private beersService: BeersService) { }

  removeBeer(): any {
    this.beersService.removeBeer(this.beer.id);
  }

  ngOnInit() {
    console.log(this.beer);
  }

}
