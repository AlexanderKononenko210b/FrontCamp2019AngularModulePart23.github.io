import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class NotificationManagerService {

    constructor(
        private notificationService: NotificationsService
    ) { }

    okNotification(message: string) {
        this.notificationService.success( 'success' , message);
    }

    alertNotification(message: string) {
        this.notificationService.alert('alert', message);
    }

    errorNotification(error: HttpErrorResponse) {
        this.notificationService.error(error.statusText, error.error.message);
    }

    infoNotification(message: string) {
        this.notificationService.success("info", message);
    }
}
