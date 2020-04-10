import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: [ './checkbox.component.css' ]
  
})

export class CheckboxComponent implements OnInit  {
    options = {checkboxes:true}
    data = [];
    columns: any = [];

    constructor(private appService:AppService) { }
    ngOnInit(): void {
      
        this.columns = [
            { key: 'id', title: "ID",  width: 50, sorting: true },
            { key: 'name', title: 'Name', width: 100},
            { key: 'phone', title: 'Phone',  align: { head: 'center' }, width: 120, sorting: true, noWrap: { head: true, body: true } },
            { key: 'company', title: 'Company', width: 300, sorting: true, align: { head: 'left', body: 'right' }, noWrap: { head: true, body: true } },
            { key: 'date', title: 'Date', width: 100, sorting: false, pinned: false },
            { key: 'phone', title: 'Phone' ,width: 120},
            { key: 'company', title: 'Company', width: 200, noWrap: { head: true, body: true } },
            { key: 'zip', title: 'ZIP', sorting: false ,width: 120 }
        ]
        this.data = this.appService.getData();


       
    }

    onCheckboxClick(selectCheckBoxArr) { 
        alert(JSON.stringify(selectCheckBoxArr));
    }



}
