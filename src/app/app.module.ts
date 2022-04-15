import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { TableUsersComponent } from './components/table-users/table-users.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { PostViewComponent } from './components/post-view/post-view.component';
import { TablePostsComponent } from './components/table-posts/table-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableUsersComponent,
    ToolBarComponent,
    NewPostComponent,
    PostViewComponent,
    TablePostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
