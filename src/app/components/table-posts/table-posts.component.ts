import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-table-posts',
  templateUrl: './table-posts.component.html',
  styleUrls: ['./table-posts.component.scss']
})
export class TablePostsComponent implements OnInit {

  displayedColumns: string[] = ['title', 'body', 'more'];
  dataSource = new MatTableDataSource<Post>();

  constructor(private postsService:PostsService, private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    const posts = await this.postsService.getAll();
    this.dataSource = new MatTableDataSource<Post>(posts);
  }

  moreInfoPost(id: number){
    this.router.navigate(['/post', id]);
  }
}
