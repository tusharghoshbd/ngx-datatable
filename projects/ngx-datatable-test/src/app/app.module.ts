import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { NgxDatatableModule } from 'ngx-datatable';
import { AppComponent } from './app.component';
//import { SearchPipe } from './pipe/search.pipe';

@NgModule({
    declarations: [
            AppComponent
            //SearchPipe
    ],
    imports: [
        BrowserModule,
        NgxDatatableModule,
        CommonModule
    ],
    //exports:[SearchPipe],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
