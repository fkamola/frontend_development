import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeersService } from './../beers.service';

@Component({
  selector: 'app-info-beer',
  templateUrl: './info-beer.component.html',
  styleUrls: ['./info-beer.component.css']
})
export class InfoBeerComponent implements OnInit {
  beer: any;

  constructor(private beersService: BeersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.beer = this.beersService.getBeer(+this.route.snapshot.params['id']);
  }

}
