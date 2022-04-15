import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostViewComponent } from './components/post-view/post-view.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'post/:id', component: PostViewComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
