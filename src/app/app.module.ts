import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule , FormGroup} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/shared/header/header.component';
import { FooterComponent } from './features/shared/footer/footer.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { ArticlesListComponent } from './features/articles-list/articles-list.component';
import { ArticleDetailComponent } from './features/article-detail/article-detail.component';
import { ArticleFormComponent } from './features/article-form/article-form.component';
import { LoginFormComponent } from './features/login-form/login-form.component';
import { MenuComponent } from './features/shared/menu/menu.component';
import { SimpleNotificationsModule } from '../../node_modules/angular2-notifications';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleComponent } from './features/articles-list/article/article.component';
import { OptionsComponent } from './features/articles-list/options/options.component';
import { LoadMoreComponent } from './features/articles-list/load-more/load-more.component';
import { ArticleInfoComponent } from './features/article-detail/article-info/article-info.component';
import { FormComponent } from './features/article-form/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    ArticlesListComponent,
    ArticleDetailComponent,
    ArticleFormComponent,
    LoginFormComponent,
    MenuComponent,
    MenuComponent,
    ArticleComponent,
    OptionsComponent,
    LoadMoreComponent,
    ArticleInfoComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
