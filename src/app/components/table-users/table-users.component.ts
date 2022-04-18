import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss']
})
export class TableUsersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'username', 'email', 'address', 'phone', 'website', 'company', 'posts'];
  dataSource = new MatTableDataSource<User>();

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    const users = await this.usersService.getAllWithPosts();
    this.dataSource = new MatTableDataSource<User>(users);
  }

  moreInfoPost(id: number){
    this.router.navigate(['/post', id]);
  }

}
