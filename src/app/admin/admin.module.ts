import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from './admin.component';


@NgModule({
  imports: [
    CommonModule,
    RouterOutlet,
    AdminRoutingModule
  ],
  declarations: [AdminComponent]

})
export class AdminModule { }
