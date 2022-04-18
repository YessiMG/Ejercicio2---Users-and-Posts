import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';
import { User } from '../models/user';
import { PostsService } from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly endpoint = `${environment.urlApi}/users`;

  constructor(private http: HttpClient, private postsService: PostsService) { }

  getAll(): Promise<User[]> {
    return lastValueFrom(this.http.get<User[]>(this.endpoint));
  }

  private mergeUsersWithPosts(users: User[] | undefined, posts: Post[] | undefined): User[] | undefined {
    if (!users || !posts) return users;
    return users.map(user=> ({...user, posts: posts.filter(post=> post.userId === user.id)}));
  }

  async getAllWithPosts(): Promise<User[] | undefined> {
    const users = await this.getAll();
    const posts = await this.postsService.getAll();
    return this.mergeUsersWithPosts(users, posts);
  }

  async getUserById(id: number): Promise<User | undefined> {
    const users = await this.getAll();
    return users.find((user:User) => user.id == id);
  }
}
