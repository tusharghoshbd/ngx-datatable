import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import { NgxPaginationModule } from 'ngx-pagination';

import { NgxDatatableComponent } from './ngx-datatable.component';
import { HeaderComponent } from './header/header.component';



import { SearchPipe } from '../pipe/search.pipe';
import { SortPipe } from '../pipe/sort.pipe';

import { DataShowingService } from '../services/data-showing.service';

@NgModule({
  declarations: [NgxDatatableComponent, SearchPipe, SortPipe, HeaderComponent],
  imports: [
    FormsModule,
      BrowserModule,
      CommonModule,
      NgxPaginationModule
    ],
    providers: [DataShowingService],
    exports: [NgxDatatableComponent, HeaderComponent]
})
export class NgxDatatableModule { }
