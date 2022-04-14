import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss']
})
export class TableUsersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'username', 'email', 'address', 'phone', 'website', 'company'];
  dataSource = new MatTableDataSource<User>();

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    const data = await this.usersService.getAll().toPromise();
    this.dataSource = new MatTableDataSource<User>(data);
  }

}
