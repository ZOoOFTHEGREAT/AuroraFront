import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { UserService } from '../../../authentication/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navBarIsLoggedIn = false;
  constructor(private userServ: UserService) {}
  ngOnInit(): void {
    this.userServ.isLoggedIn.subscribe((isLogged: boolean) => {
      this.navBarIsLoggedIn = isLogged;
    });
  }
  login: string = 'login';
  register: string = 'register';
  user: number = 0;
}
