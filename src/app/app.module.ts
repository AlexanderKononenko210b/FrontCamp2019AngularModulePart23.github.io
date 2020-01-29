import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/shared/header/header.component';
import { FooterComponent } from './features/shared/footer/footer.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { ArticlesListComponent } from './features/articles-list/articles-list.component';
import { ArticleDetailComponent } from './features/article-detail/article-detail.component';
import { ArticleFormComponent } from './features/article-form/article-form.component';
import { MenuComponent } from './features/shared/menu/menu.component';
import { SimpleNotificationsModule } from '../../node_modules/angular2-notifications';
import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleComponent } from './features/articles-list/article/article.component';
import { OptionsComponent } from './features/articles-list/options/options.component';
import { LoadMoreComponent } from './features/articles-list/load-more/load-more.component';
import { ArticleInfoComponent } from './features/article-detail/article-info/article-info.component';
import { FormComponent } from './features/article-form/form/form.component';
import { ArticleFilterPipe } from "./services/shared/pipes/filter-pipe.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    ArticlesListComponent,
    ArticleDetailComponent,
    ArticleFormComponent,
    MenuComponent,
    MenuComponent,
    ArticleComponent,
    OptionsComponent,
    LoadMoreComponent,
    ArticleInfoComponent,
    FormComponent,
    ArticleFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ArticleFilterPipe],
  bootstrap: [AppComponent],
  entryComponents: [
      ArticleComponent,
      OptionsComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
  constructor(
    private injector: Injector
  ) {
    const optionElement = createCustomElement(OptionsComponent, { injector: this.injector });
    customElements.define('option-example-element', optionElement);
  }
  ngDoBootstrap() {
  }
}
