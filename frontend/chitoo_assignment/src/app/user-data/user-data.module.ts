import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { WinnerComponent } from './winner/winner.component';
import { TopperComponent } from './topper/topper.component';
import { AllComponent } from './all/all.component';
import {HttpClientModule} from '@angular/common/http'
import {MatTableModule} from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [


    UserComponent,
    WinnerComponent,
    TopperComponent,
    AllComponent,
    
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule
  ],
  exports:[ UserComponent,
    WinnerComponent,
    TopperComponent,
    AllComponent,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,]

})
export class UserDataModule { }
