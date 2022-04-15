import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { PostsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  users: User[] | undefined = [];
  maxId= 0;
  checkoutForm;

  constructor(private usersService: UsersService, private postsService: PostsService, private formBuilder: FormBuilder, private snackBar: MatSnackBar) { 
    this.checkoutForm = this.formBuilder.group({
      id: [''],
      userId: ['', [Validators.required]],
      title: ['', [Validators.required]],
      body: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    this.users = await this.usersService.getAllWithPosts();
    const posts = await this.postsService.getAll();
    for (let i in posts){
      if(posts[i].id > this.maxId){
        this.maxId = posts[i].id;
      }
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Ok');
  }

  onSubmit(postData: Post) {
    if (this.checkoutForm.invalid) return;
    this.postsService.create(postData, this.maxId).then(()=> {
      this.checkoutForm.reset();
      for (const field in this.checkoutForm.controls) {
        const control = this.checkoutForm.get(field);
        control?.clearValidators();
        control?.updateValueAndValidity();
      }
    });
    this.openSnackBar('Tu post se ha publicado');
  }
}
