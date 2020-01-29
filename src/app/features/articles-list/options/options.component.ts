import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent {

  constructor(
    private router: Router
  ) { }

  @Input() sources: string[] = [];
  @Input() selectedSources: string = "";
  @Input() inputFilter: string = "";
  
  public isChecked: boolean = false;

  @Output() onSourceChange = new EventEmitter<string>();
  @Output() onFilterClick = new EventEmitter();
  @Output() onCheckedByMe = new EventEmitter<boolean>();

  sourceChange(event: any) {
    this.onSourceChange.emit(event.target.value);
  }

  filterClick(filter: string) {
    this.onFilterClick.emit(filter);
  }

  isCheckedByMe(event: any) {
    this.isChecked = event.target.checked;
    this.onCheckedByMe.emit(event.target.checked);
  }

  onAdd() {
    this.router.navigate([`/form`])
  }
}
