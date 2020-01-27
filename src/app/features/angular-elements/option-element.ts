import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { OptionsComponent } from "../../features/articles-list/options/options.component";

@NgModule({
    declarations: [
        OptionsComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [],
    entryComponents: [
        OptionsComponent
    ]
})

export class OptionModule {
    constructor(
        private injector: Injector
    ) {
        const optionElement = createCustomElement(OptionsComponent, { injector: this.injector });
        customElements.define('option-example-element', optionElement);
    }
    ngDoBootstrap() {
    }
}