import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  newPosts: boolean = false;
  seePost: boolean = true;

  constructor() { }

  ngOnInit(): void { }

  newPost() {
    this.newPosts = true;
  }
  
  cancelPost(){
    this.newPosts = false;
  }

  seePosts(){
    this.seePost = true;
  }

  seeUsers(){
    this.seePost = false;
  }

}
