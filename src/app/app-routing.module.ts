import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostViewComponent } from './components/post-view/post-view.component';
import { TablePostsComponent } from './components/table-posts/table-posts.component';
import { TableUsersComponent } from './components/table-users/table-users.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', component: TableUsersComponent },
  { path: 'posts', component: TablePostsComponent },
  { path: 'post/:id', component: PostViewComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
