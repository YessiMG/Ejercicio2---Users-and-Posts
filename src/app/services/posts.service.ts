import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getById (id: number) {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
