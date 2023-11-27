import { Component, OnInit } from '@angular/core';
import { UserService } from './authentication/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private authService: UserService) {}
  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.authService.isLoggedIn.next(true);
    }
  }
  title = 'Customer';
}
