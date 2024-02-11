import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { RouterOutlet } from '@angular/router';
import { WebsiteComponent } from './website.component';


@NgModule({
  declarations: [WebsiteComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
