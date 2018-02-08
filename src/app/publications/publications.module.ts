import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationsComponent } from './publications.component';
import {CardsComponent} from './../cards/cards.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PublicationsComponent,CardsComponent]
})
export class PublicationsModule { }

