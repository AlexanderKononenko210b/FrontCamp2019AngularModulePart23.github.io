import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from "@angular/router";

import { NotificationManagerService } from "../../../services/shared/notification-manager.service";

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  constructor(
    private notification: NotificationManagerService,
    private router: Router
  ) { }

  @Input() sources: string[] = [];
  public isChecked: boolean = false;

  @Output() onSourceChange = new EventEmitter<string>();
  @Output() onFilterChange = new EventEmitter<string>();
  @Output() onFilterClick = new EventEmitter();
  @Output() onCheckedByMe = new EventEmitter<boolean>();

  sourceChange(event: any) {
    this.onSourceChange.emit(event.target.value);
  }

  filterChange(event: any) {
    this.onFilterChange.emit(event.target.value);
  }

  filterClick() {
    this.onFilterClick.emit();
  }

  isCheckedByMe(event: any) {
    this.isChecked = event.target.checked;
    this.onCheckedByMe.emit(event.target.checked);
  }

  onAdd() {
    this.router.navigate([`/form`])
  }

  ngOnInit() {
  }
}
