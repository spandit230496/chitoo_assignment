import { Component } from '@angular/core';
import { UsersdataService } from 'src/app/service/usersdata.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {
 users: any = [];
  user:any=[]

  constructor(private userData: UsersdataService) {
    userData.users().subscribe((data:any) => {
      console.table(data);
      this.users.push(data);
      this.user =data[0].users
    });
  }
  
    displayedColumns: string[] = ['name', 'age', 'score',];
    dataSource = this.user;

}
