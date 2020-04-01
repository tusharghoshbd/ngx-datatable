import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-cell-template',
  templateUrl: './cell-template.component.html'
})

export class CellTemplateComponent implements OnInit  {
    @ViewChild('actionTpl', { static: true }) actionTpl: TemplateRef<any>;
    options = {}
    data = [];
    columns: any = {};
    columnsWithFeatures:any
    constructor(private appService:AppService) { }
    ngOnInit(): void {
      
        this.columns = [
            { key: 'id', title: "ID",  width: 50, sorting: true },
            { key: 'name', title: 'Name', width: 100 },
            { key: 'phone', title: 'Phone', align: { head: 'left' }, width: 100, sorting: true },
            { key: 'company', title: '<div class="blue"><i class="fa fa-building"></i>  Company</div>', width: 300, sorting: true, align: { head: 'left', body: 'right' }, noWrap: { head: true, body: true } },
            { key: 'date', title: 'Date', sorting: false, pinned: false },
            { key: 'date', title: 'Date' },
            { key: 'phone', title: 'Phone' ,width: 100},
            { key: 'zip', title: 'Action', sorting: false, width: 80, cellTemplate: this.actionTpl, noWrap: { head: true, body: true } }
        ]
        this.data = this.appService.getData();
       
    }


    onClickBtn() {
        alert("Hi Add Button !!!!!");
    }
    remove(rowInded) {
        alert("Row Index :- "+rowInded);
    }
    edit(row){
        alert(JSON.stringify(row));
    }
   

}
