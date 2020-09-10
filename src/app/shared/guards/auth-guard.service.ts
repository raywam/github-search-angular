import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }
  private isAuthenticated: boolean = true;

  canActivate() {
    return this.isAuthenticated;
  }
}
