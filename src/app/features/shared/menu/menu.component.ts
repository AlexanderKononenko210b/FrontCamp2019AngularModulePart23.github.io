import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NotificationManagerService } from "../../../services/shared/notificationSvc/notification-manager.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(
    private router: Router,
    private notification: NotificationManagerService
  ) { }

  onLogIn() {
    this.notification.infoNotification("Feature coming soon");
  }

  onLogOut() {
    this.notification.infoNotification("Feature coming soon");
  }
}
