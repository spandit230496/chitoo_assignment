import { Component } from '@angular/core';
import { UsersdataService } from 'src/app/service/usersdata.service';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})

export class WinnerComponent {
  winners: any[] = [];
  winner:any[]=[];
  winnerboject:any[]=[]

  constructor(public userData: UsersdataService) {
    userData.winner().subscribe((data:any) => {
      JSON.stringify(data)
      this.winners.push(data);
       console.log( this.winners)

      this.winners[0].map((item:any)=>{
        this.winner.push(item.winner)
        
        
      })
      console.table(this.winner)
     

      this.winner.forEach((item)=>{
        this.winnerboject.push(item[0])
      })
      console.log(this.winnerboject)
    });
  }
  displayedColumns: string[] = ['index', 'name', 'age', 'score'];
  dataSource = this.winners;
 

}
