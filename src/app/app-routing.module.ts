import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesListComponent } from "./features/articles-list/articles-list.component";
import { ArticleDetailComponent } from "./features/article-detail/article-detail.component";
import { ArticleFormComponent } from "./features/article-form/article-form.component";
import { NotFoundComponent } from "./features/not-found/not-found.component";

const routes: Routes = [
  { path: "",
      children: [
        { path: "", component: ArticlesListComponent },
        { path: "detail/:id", component: ArticleDetailComponent },
        { path: "form", component: ArticleFormComponent },
        { path: "form/:id", component: ArticleFormComponent },
      ]},
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
