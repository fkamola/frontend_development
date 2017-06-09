import { Component, OnInit } from '@angular/core';
import { BeersService } from './../beers.service';
import { Beer } from './../beer';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.component.html',
})
export class AddBeerComponent implements OnInit {

  constructor(private beersService: BeersService, private router: Router) { }

  beerForm: FormGroup;

  private name: FormControl;
  private brewery: FormControl;
  private style: FormControl;
  private bitterness: FormControl;
  private alcohol: FormControl;
  private description: FormControl;

  ngOnInit() {
    this.name = new FormControl('');
    this.brewery = new FormControl('');
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

  addBeer(values): void {
    this.beersService.addBeer(values);
    this.router.navigate(['/home']);
  }

}
