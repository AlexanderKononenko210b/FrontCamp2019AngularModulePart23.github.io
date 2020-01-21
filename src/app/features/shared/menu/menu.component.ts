import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NotificationManagerService } from "../../../services/shared/notification-manager.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router,
    private notification: NotificationManagerService
  ) { }

  ngOnInit() {
  }

  onLogIn() {
    this.notification.infoNotification("Feature coming soon");
    //this.router.navigate(['/login']);
  }

  onLogOut() {
    this.notification.infoNotification("Feature coming soon");
  }
}
