import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import { NgxDatatableComponent } from './ngx-datatable.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { SearchPipe } from '../pipe/search.pipe';


@NgModule({
  declarations: [NgxDatatableComponent, SearchPipe],
  imports: [
    FormsModule,
      BrowserModule,
      CommonModule,
      NgxPaginationModule
  ],
  exports: [NgxDatatableComponent]
})
export class NgxDatatableModule { }
