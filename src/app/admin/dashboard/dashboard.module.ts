import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: DashboardComponent }
  ])
  ],
  declarations: [DashboardComponent],
  providers: []
})
export class DashboardModule { }

