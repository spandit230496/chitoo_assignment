import { Component, OnInit } from '@angular/core';
import { UsersdataService } from 'src/app/service/usersdata.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  users: any = [];
  user:any=[];
  reloaded_data=[]
  result:Boolean=false

  constructor(private userData: UsersdataService)  {
    userData.users().subscribe((data:any) => {
      console.table(data);
      this.users.push(data);
      this.user =data[0].users
      this.reloaded_data=data[0].users
      
    });
  
  }
  filterData() {
    console.log(this.user);
    this.user = this.user.filter((item: any) => {
      return item.age < 21;
    });
  }
  reloadData() {
    console.log(this.user);
    this.user = this.reloaded_data
  }
  
  
  
  click(item: any) {
   this.result= confirm("do you want to save to winner")
    if(this.result){
    this.userData.savewinner(item).subscribe((data: any) => {
      console.table(data);
    
    }, (error: any) => {
      console.error(error);
      
    });
  }
}

  displayedColumns: any = [ 'index','name', 'age', 'score','save'];
  dataSource = this.user;
  
  
  }
  
  

