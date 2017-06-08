import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate } from "@angular/router";

@Injectable()
export class RouterService {

  constructor (private router: Router) { }

  canActivate(){
    return false;
  }

}
