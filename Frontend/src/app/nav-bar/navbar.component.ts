import { Component, OnInit } from "@angular/core";
import { AlertifyService } from "../services/alertify.service";

@Component({
    selector : 'app-nav-bar',
    // template :`<h1>I am a card</h2>`
    templateUrl : './navbar.component.html',
    // styles : ['h1 {font-weight: normal;}']
    styleUrls : ['./navbar.component.css']
})

export class Navbar implements OnInit{
    logggedinUser : string;
    constructor(private alertify  : AlertifyService){}


    ngOnInit()
    {

    }

    loggedin()
    {
      this.logggedinUser = localStorage.getItem('token');
      return this.logggedinUser;
    }
    onLogout()
    {
        localStorage.removeItem('token');
        this.alertify.success("You are loged out!");
    }
}