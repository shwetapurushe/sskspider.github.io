import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';

import { CarouselModule } from 'angular4-carousel';

@NgModule({
  imports: [
    CommonModule
    ,CarouselModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
