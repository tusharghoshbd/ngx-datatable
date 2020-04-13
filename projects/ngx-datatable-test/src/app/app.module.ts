import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { NgxDatatableModule } from '@tusharghoshbd/ngx-datatable';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { PinTabComponent } from './pin-tab/pin-tab.component';
import { CellTemplateComponent } from './cell-template/cell-template.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

//import { SearchPipe } from './pipe/search.pipe';
import { AppService } from './app.service';

@NgModule({
    declarations: [
            AppComponent,
            BasicComponent,
            PinTabComponent,
            CellTemplateComponent,
            CheckboxComponent
            //SearchPipe
    ],
    imports: [
        BrowserModule,
        NgxDatatableModule,
        CommonModule
    ],
    //exports:[SearchPipe],
    providers: [AppService],
    bootstrap: [AppComponent]
})
export class AppModule { }
