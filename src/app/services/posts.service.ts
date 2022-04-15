import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private readonly endpoint = `${environment.urlApi}/posts`;
  postByUser: Post[] = [];

  constructor(private http: HttpClient) { }

  getAll(): Promise<Post[]> {
    return lastValueFrom(this.http.get<Post[]>(this.endpoint));
  }

  getById (id: number): Promise<Post> {
    return lastValueFrom(this.http.get<Post>(`${this.endpoint}/${id}`));
  }

  create(newPost: Post, maxId: number): Promise<Post> {
    newPost.id = maxId+1;
    return lastValueFrom(this.http.post<Post>(this.endpoint,newPost));
  }
  
}
