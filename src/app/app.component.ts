import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UPet';
  constructor(private router:Router) {
  }
  isLoginOrRegister(){
    const currentUrl = this.router.url;
    return currentUrl === '/login' ||currentUrl === '/' ||currentUrl==='/add-pet'|| currentUrl === '/register';
  }
}
