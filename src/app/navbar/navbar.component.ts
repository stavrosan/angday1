import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

}

document.addEventListener("DOMContentLoaded",()=>{
    let navelemnt = document.querySelector(".navbar") as HTMLElement;
  window.addEventListener("scroll",()=>{
    if(window.scrollY > 56){
      navelemnt.classList.add("navbar-scrolled");
    }else if(window.scrollY < 56){
      navelemnt.classList.remove("navbar-scrolled");
    }
  })
})