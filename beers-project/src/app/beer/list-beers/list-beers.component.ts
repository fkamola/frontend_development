import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BeersService } from './../beers.service';

@Component({
  selector: 'list-beers',
  templateUrl: './list-beers.component.html',
  styleUrls: ['./list-beers.component.css']
})
export class ListBeersComponent implements OnInit {
  beers: any;
  beersBeforeFiltered: any;
  search: any;

  constructor(private beersService: BeersService) { }

  searchChange(search): void{
    let filtered = this.beersBeforeFiltered.filter(c => {
      let result = (c.name.toLowerCase().includes(search.toLowerCase()));
      return result;
    })
    this.beers = filtered;
  }

  ngOnInit() {
    this.beers = this.beersService.getBeers();
    this.beersBeforeFiltered = this.beers;
  }

}
