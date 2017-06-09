import { Component, OnInit, Input } from '@angular/core';
import { BeersService} from './../beers.service';

@Component({
  selector: 'app-single-beer',
  templateUrl: './single-beer.component.html',
})

export class SingleBeerComponent implements OnInit {

  @Input() beer: any;

  constructor(private beersService: BeersService) { }

  removeBeer(): any {
    if(confirm(`Are you sure to delete ${this.beer.name} ?`)) {
      this.beersService.removeBeer(this.beer.id);
  }
  }
  ngOnInit() {
    console.log(this.beer);
  }

}
