import { Injectable } from '@angular/core';
import { IBeer } from './ibeer';

@Injectable()
export class BeersService {
  id: number = 100;

  getBeers(){
    return BEERS;
  }

  getBeer(id: Number){
    return BEERS.find(event => event.id === id);
  }

  addBeer(beer: IBeer){
    beer.id = this.id ++;
    BEERS.push(beer);
  }

  removeBeer(id: number){
    let findBeer = BEERS.find(event => event.id === id);
    let findIndex = BEERS.indexOf(findBeer);
    BEERS.splice(findIndex, 1);
  }

}

const BEERS: IBeer[] = [{
    id: 0,
    name: 'Imperium Atakuje',
    brewery: 'Pinta',
    style: 'Imperial IPA',
    bitterness: '81 IBU',
    alcohol: '7,8%',
    description:  '...'
  },{
    id: 1,
    name: '',
    brewery: '',
    style: '',
    bitterness: '',
    alcohol: '',
    description:  ''
  }, 
  {
    id: 2,
    name: '',
    brewery: '',
    style: '',
    bitterness: '',
    alcohol: '',
    description:  ''
  },
  {
    id: 3,
    name: '',
    brewery: '',
    style: '',
    bitterness: '',
    alcohol: '',
    description:  ''
  },
  {
    id: 4,
    name: '',
    brewery: '',
    style: '',
    bitterness: '',
    alcohol: '',
    description:  ''
}]