import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-pin-tab',
  templateUrl: './pin-tab.component.html'
})

export class PinTabComponent implements OnInit  {
    options = {}
    data = [];
    columns: any = {};
    columnsWithFeatures:any
    constructor(private appService:AppService) { }
    ngOnInit(): void {
      
        this.columns = [
            { key: 'id', title: "ID",  width: 50, sorting: true, pinned: true },
            { key: 'name', title: 'Name', width: 100, pinned: true },
            { key: 'phone', title: 'Phone', align: { head: 'center' }, width: 100, sorting: true },
            { key: 'company', title: 'Company', width: 300, sorting: true, align: { head: 'left', body: 'right' }, noWrap: { head: true, body: true } },
            { key: 'date', title: 'Date', sorting: false, pinned: false },
            { key: 'date', title: 'Date' },
            { key: 'phone', title: 'Phone' ,width: 100},
            { key: 'company', title: 'Company', width: 200, noWrap: { head: true, body: true } },
            { key: 'zip', title: 'ZIP', sorting: false },
            { key: 'date', title: 'Date', sorting: false },
            { key: 'zip', title: 'ZIP', sorting: false }
        ]
        this.data = this.appService.getData();
       
    }

}
