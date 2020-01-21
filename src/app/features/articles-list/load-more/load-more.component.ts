import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { NotificationManagerService } from "../../../services/shared/notification-manager.service";

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent implements OnInit {

  constructor(
    private notification: NotificationManagerService
  ) { }

  @Output() onLoadMore = new EventEmitter();

  loadMore() {
    this.onLoadMore.emit();
  }

  ngOnInit() {
  }
}
