import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-pin-tab',
  templateUrl: './pin-tab.component.html',
  styleUrls: [ './pin-tab.component.css' ]
  
})

export class PinTabComponent implements OnInit  {
    options = {}
    data = [];
    columns: any = [];

    optionsWithCheckbox = {}
    dataWithCheckbox = [];
    columnsWithCheckbox: any = {};
    constructor(private appService:AppService) { }
    ngOnInit(): void {
      
        this.columns = [
            { key: 'id', title: "ID",  width: 50, sorting: true, pinned: true },
            { key: 'name', title: 'Name', width: 100, pinned: true },
            { key: 'phone', title: 'Phone',  align: { head: 'center' }, width: 120, sorting: true, noWrap: { head: true, body: true } },
            { key: 'company', title: 'Company', width: 300, sorting: true, align: { head: 'left', body: 'right' }, noWrap: { head: true, body: true } },
            { key: 'date', title: 'Date', width: 100, sorting: false, pinned: false },
            { key: 'date', title: 'Date', width: 100 },
            { key: 'phone', title: 'Phone' ,width: 120},
            { key: 'company', title: 'Company', width: 200, noWrap: { head: true, body: true } },
            { key: 'zip', title: 'ZIP', sorting: false ,width: 120 },
            { key: 'date', title: 'Date', sorting: false  ,width: 120},
            { key: 'zip', title: 'ZIP', sorting: false ,width: 120 }
        ]
        this.data = this.appService.getData();


        this.optionsWithCheckbox = {checkboxes:true}
        this.dataWithCheckbox = this.appService.getData();;
        this.columnsWithCheckbox =[
            { key: 'id', title: "ID",  width: 50, sorting: true, pinned: true },
            { key: 'name', title: 'Name', width: 100, pinned: true },
            { key: 'phone', title: 'Phone',  align: { head: 'center' }, width: 120, sorting: true, noWrap: { head: true, body: true } },
            { key: 'company', title: 'Company', width: 300, sorting: true, align: { head: 'left', body: 'right' }, noWrap: { head: true, body: true } },
            { key: 'date', title: 'Date', width: 100, sorting: false, pinned: false },
            { key: 'date', title: 'Date', width: 100 },
            { key: 'phone', title: 'Phone' ,width: 120},
            { key: 'company', title: 'Company', width: 200, noWrap: { head: true, body: true } },
            { key: 'zip', title: 'ZIP', sorting: false ,width: 120 },
            { key: 'date', title: 'Date', sorting: false  ,width: 120},
            { key: 'zip', title: 'ZIP', sorting: false ,width: 120 }
        ];
       
    }

    onCheckboxClick(selectCheckBoxArr) { 
        alert(JSON.stringify(selectCheckBoxArr));
    }

}
