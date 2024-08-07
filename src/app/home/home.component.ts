import { Component } from '@angular/core';
import { CookieService } from '../services/cookie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  token:string = 'Cookie';

  constructor(private cookieService:CookieService){}

  setMyCookie(): void {
    this.cookieService.setCookie('myCookie', '123', 2);
  }

  getMyCookie(): void {
    const value = this.cookieService.getCookie('myCookie');
    if(value){
      this.token = value
      return
    }
    this.token = 'No cookie'
  }

  deleteMyCookie(): void {
    this.cookieService.deleteCookie('myCookie');
  }
}
