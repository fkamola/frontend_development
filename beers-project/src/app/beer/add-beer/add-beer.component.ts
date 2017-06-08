import { Component, OnInit } from '@angular/core';
import { BeersService } from './../beers.service';
import { IBeer } from './../ibeer';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.component.html',
  styleUrls: ['./add-beer.component.css']
})
export class AddBeerComponent implements OnInit {

  constructor(private beersService: BeersService) { }

  beerForm: FormGroup;

  private name: FormControl;
  private brewery: FormControl;
  private style: FormControl;
  private bitterness: FormControl;
  private alcohol: FormControl;
  private description: FormControl;

  ngOnInit() {
    this.name = new FormControl('', [Validators.required, Validators.minLength(4)]);
    this.brewery = new FormControl('', [Validators.required, Validators.minLength(4)]);
    this.style = new FormControl('');
    this.bitterness = new FormControl('');
    this.alcohol = new FormControl('');
    this.description = new FormControl('');

    this.beerForm = new FormGroup({
      name: this.name,
      brewery: this.brewery,
      style: this.style,
      bitterness: this.bitterness,
      alcohol: this.alcohol,
      description: this.description
    });
  }

  validateName() {
    return !this.name.valid;
  }

  validateBrewery() {
    return !this.brewery.valid;
  }

  addBeer(values): void {
    this.beersService.addBeer(values);
    console.log(values);
  }

}
