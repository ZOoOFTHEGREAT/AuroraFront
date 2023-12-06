import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../authentication/Service/auth.service';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css'],
})
export class AdminnavbarComponent implements OnInit {
  navBarIsLoggedIn = false;
  constructor(private adminServ: AuthService) {}
  ngOnInit(): void {
    this.adminServ.isLoggedIn.subscribe((isLogged: boolean) => {
      this.navBarIsLoggedIn = isLogged;
    });
  }
  handleLogOut(e: Event) {
    e.preventDefault;
    this.adminServ.isLoggedIn.next(false);
    localStorage.removeItem('token');
  }
  login: string = 'login';
  register: string = 'register';
  user: number = 0;
}
