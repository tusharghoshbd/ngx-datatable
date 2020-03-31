import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { NgxDatatableModule } from 'ngx-datatable';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { PinTabComponent } from './pin-tab/pin-tab.component';
import { CellTemplateComponent } from './cell-template/cell-template.component';
//import { SearchPipe } from './pipe/search.pipe';


@NgModule({
    declarations: [
            AppComponent,
            BasicComponent,
            PinTabComponent,
            CellTemplateComponent
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
