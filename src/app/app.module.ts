import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostShortComponent } from './blog-post-short/blog-post-short.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostShortComponent,
    BlogPostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
