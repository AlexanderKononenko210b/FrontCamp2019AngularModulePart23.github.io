import { Component } from '@angular/core';
import { LocalStorageUserModel } from "./models/local-storage-user-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    //temp solution to test components
    localStorage.setItem(LocalStorageUserModel.name, "kv210");
  }
  title = 'FrontCamp2019AngularModulePart23';
}
