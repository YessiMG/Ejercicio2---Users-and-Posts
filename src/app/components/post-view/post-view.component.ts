import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { PostsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  idPost: number = 0;
  post: Post = {} as Post;
  user: User | undefined;

  constructor(private route: ActivatedRoute, private postsService: PostsService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idPost = params['id'];
    });

    this.loadData();
  }

  async loadData() {
      this.post = await this.postsService.getById(this.idPost);
      this.user = await this.usersService.getUserById(this.post.userId);
  }

}
