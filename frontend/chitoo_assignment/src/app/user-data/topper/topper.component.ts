import { Component } from '@angular/core';
import { UsersdataService } from 'src/app/service/usersdata.service';

@Component({
  selector: 'app-topper',
  templateUrl: './topper.component.html',
  styleUrls: ['./topper.component.css']
})
export class TopperComponent {
  users: any = [];
  user:any=[]

  constructor(private userData: UsersdataService) {
    userData.users().subscribe((data:any) => {
      console.table(data);
      this.users.push(data);
      this.user =data[0].users.filter((item:any)=>item.score>90)
    });
  }
  
    displayedColumns: string[] = [ 'name', 'age', 'score'];
    dataSource = this.user;
  
}
