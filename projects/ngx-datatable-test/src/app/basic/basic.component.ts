import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html'
})

export class BasicComponent implements OnInit  {
    options = {}
    data = [];
    columns: any = {};

    optionsBasicNoData = {}
    dataBasicNoData = [];
    columnsBasicNoData: any = {};

    optionsWithCaption = {}
    dataWithCaption = [];
    columnsWithCaption: any = {};

    columnsWithFeatures:any
    optionsWithFeatures: any
    dataWithFeatures: any
    
    optionsWithoutClass = {}
    dataWithoutClass = [];
    columnsWithoutClass: any = {};

    constructor(private appService:AppService) { }
    ngOnInit(): void {
       
        
        this.data = this.appService.getData();
        this.columns = [
            { key: 'id', title: "ID" },
            { key: 'name', title: 'Name' },
            { key: 'phone', title: 'Phone' },
            { key: 'company', title: 'Company'},
            { key: 'date', title: 'Date' },
            { key: 'phone', title: 'Phone' },
        ]

        this.optionsBasicNoData = {
            emptyDataMessage : 'No data available in table'
        }
        this.dataBasicNoData = [];
        this.columnsBasicNoData = [
            { key: 'id', title: "ID" },
            { key: 'name', title: 'Name' },
            { key: 'phone', title: 'Phone' },
            { key: 'company', title: 'Company'},
            { key: 'date', title: 'Date' },
            { key: 'phone', title: 'Phone' },
        ]

        this.dataWithCaption = this.appService.getData();
        this.columnsWithCaption = [
            { key: 'id', title: "ID" },
            { key: 'name', title: 'Name' },
            { key: 'phone', title: 'Phone' },
            { key: 'company', title: 'Company'},
            { key: 'date', title: 'Date' },
            { key: 'phone', title: 'Phone' }
        ]


        this.optionsWithFeatures = {
            rowClickEvent: true,
            rowPerPageMenu: [5, 10, 20, 30],
            rowPerPage : 5
        }
        this.dataWithFeatures = this.appService.getData();
        this.columnsWithFeatures = [
            { key: 'id', title: "ID", width: 50, sorting: true },
            { key: 'name', title: 'Name', width: 100, },
            { key: 'phone', title: 'Phone', align: { head: 'center' }, width: 100, sorting: false },
            { key: 'company', title: 'Company', width: 300, sorting: true, align: { head: 'right', body: 'right' }, noWrap: { head: true, body: true } },
            { key: 'date', title: 'Date', sorting: false, },
            { key: 'zip', title: 'ZIP Title with text wrap', sorting: true, width: 80, noWrap: { head: true, body: true } },
            { key: 'company', title: 'Company', width: 200, noWrap: { head: true, body: true } },
            { key: 'zip', title: 'ZIP', sorting: false },
            { key: 'date', title: 'Date', sorting: false },
            { key: 'zip', title: 'ZIP', sorting: false }
        ];

        this.dataWithoutClass = this.appService.getData();
        this.columnsWithoutClass = [
            { key: 'id', title: "ID" },
            { key: 'name', title: 'Name' },
            { key: 'phone', title: 'Phone' },
            { key: 'company', title: 'Company'},
            { key: 'date', title: 'Date' },
            { key: 'phone', title: 'Phone' }
        ]
       
    }

    onClickBtn() {
        alert("Hi Add Button !!!!!");
    }
    onRowClick(item: any) {
        alert(JSON.stringify(item));
    }


   
}
