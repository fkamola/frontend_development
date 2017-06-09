import { Injectable } from '@angular/core';
import { Beer } from './beer';

@Injectable()
export class BeersService {
  id: number = 666;

  getBeers(){
    return BEERS;
  }

  getBeer(id: Number){
    return BEERS.find(event => event.id === id);
  }

  addBeer(beer: Beer){
    beer.id = this.id ++;
    BEERS.push(beer);
  }

  removeBeer(id: number){
    let findBeer = BEERS.find(event => event.id === id);
    let findIndex = BEERS.indexOf(findBeer);
    BEERS.splice(findIndex, 1);
  }

}

const BEERS: Beer[] = [{
    id: 1,
    name: 'Imperium Atakuje',
    brewery: 'Pinta',
    style: 'Imperial IPA',
    bitterness: 81,
    alcohol: 7.8,
    description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
},
    {
    id: 2,
    name: 'Imperium Atakuje',
    brewery: 'Pinta',
    style: 'Imperial IPA',
    bitterness: 81,
    alcohol: 7.8,
    description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
  },
  {
    id: 3,
    name: 'Imperium Atakuje',
    brewery: 'Pinta',
    style: 'Imperial IPA',
    bitterness: 81,
    alcohol: 7.8,
    description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
},
{
    id: 4,
    name: 'Imperium Atakuje',
    brewery: 'Pinta',
    style: 'Imperial IPA',
    bitterness: 81,
    alcohol: 7.8,
    description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
},
 {
    id: 5,
    name: 'Imperium Atakuje',
    brewery: 'Pinta',
    style: 'Imperial IPA',
    bitterness: 81,
    alcohol: 7.8,
    description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
  },
  {
    id: 6,
    name: 'Imperium Atakuje',
    brewery: 'Pinta',
    style: 'Imperial IPA',
    bitterness: 81,
    alcohol: 7.8,
    description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
},
{
    id: 7,
    name: 'Imperium Atakuje',
    brewery: 'Pinta',
    style: 'Imperial IPA',
    bitterness: 81,
    alcohol: 7.8,
    description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
},
 {
    id: 8,
    name: 'Imperium Atakuje',
    brewery: 'Pinta',
    style: 'Imperial IPA',
    bitterness: 81,
    alcohol: 7.8,
    description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
  },
  {
    id: 9,
    name: 'Imperium Atakuje',
    brewery: 'Pinta',
    style: 'Imperial IPA',
    bitterness: 81,
    alcohol: 7.8,
    description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
},
{
    id: 10,
    name: 'Imperium Atakuje',
    brewery: 'Pinta',
    style: 'Imperial IPA',
    bitterness: 81,
    alcohol: 7.8,
    description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
},
 {
    id: 11,
    name: 'Imperium Atakuje',
    brewery: 'Pinta',
    style: 'Imperial IPA',
    bitterness: 81,
    alcohol: 7.8,
    description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
  },
  {
    id: 12,
    name: 'Imperium Atakuje',
    brewery: 'Pinta',
    style: 'Imperial IPA',
    bitterness: 81,
    alcohol: 7.8,
    description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
},
{
    id: 13,
    name: 'Imperium Atakuje',
    brewery: 'Pinta',
    style: 'Imperial IPA',
    bitterness: 81,
    alcohol: 7.8,
    description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
},
 {
    id: 14,
    name: 'Imperium Atakuje',
    brewery: 'Pinta',
    style: 'Imperial IPA',
    bitterness: 81,
    alcohol: 7.8,
    description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
  },
  {
    id: 15,
    name: 'Imperium Atakuje',
    brewery: 'Pinta',
    style: 'Imperial IPA',
    bitterness: 81,
    alcohol: 7.8,
    description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
},
{
    id: 16,
    name: 'Imperium Atakuje',
    brewery: 'Pinta',
    style: 'Imperial IPA',
    bitterness: 81,
    alcohol: 7.8,
    description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
},
 {
    id: 17,
    name: 'Imperium Atakuje',
    brewery: 'Pinta',
    style: 'Imperial IPA',
    bitterness: 81,
    alcohol: 7.8,
    description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
  },
  {
    id: 18,
    name: 'Imperium Atakuje',
    brewery: 'Pinta',
    style: 'Imperial IPA',
    bitterness: 81,
    alcohol: 7.8,
    description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
},
{
    id: 19,
    name: 'Imperium Atakuje',
    brewery: 'Pinta',
    style: 'Imperial IPA',
    bitterness: 81,
    alcohol: 7.8,
    description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
},
{
    id: 20,
    name: 'Imperium Atakuje',
    brewery: 'Pinta',
    style: 'Imperial IPA',
    bitterness: 81,
    alcohol: 7.8,
    description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
}]