import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDataModule } from './user-data/user-data.module';
import { AllComponent } from './user-data/all/all.component';
import { UserComponent } from './user-data/user/user.component';
import { WinnerComponent } from './user-data/winner/winner.component';
import { TopperComponent } from './user-data/topper/topper.component';
const routes: Routes = [ 
  {path:"",component:AllComponent},
  {path:"user",component:UserComponent},
  {path:"winner",component:WinnerComponent},
  {path:"topper",component:TopperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),UserDataModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
