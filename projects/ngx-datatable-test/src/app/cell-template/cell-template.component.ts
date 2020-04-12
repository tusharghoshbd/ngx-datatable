import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-cell-template',
    templateUrl: './cell-template.component.html',
    styleUrls: [ './cell-template.component.css' ]
})

export class CellTemplateComponent implements OnInit  {
    @ViewChild('actionTpl', { static: true }) actionTpl: TemplateRef<any>;
    @ViewChild('addressTpl', { static: true }) addressTpl: TemplateRef<any>;
    
    panelShow = true;
    options = {};
    data = [];
    dataBK = [];
    columns: any = {};
    columnsWithFeatures:any
    constructor(private appService:AppService) { }
    ngOnInit(): void {
      
        this.options = {
            loader: true
        }
        this.columns = [
            { key: 'id', title: '<div class="blue"><i class="fa fa-id-card-o"></i> ID</div>',  width: 60, sorting: true, align: { head: 'center', body: 'center' }, vAlign: { head: 'bottom', body: 'middle' }, },
            { key: 'name', title: '<div class="blue"><i class="fa fa-user"></i> Name</div>', width: 100 },
            { key: 'gender', title: '<div class="blue"><i class="fa fa-phone"></i> Gender</div>', align: { head: 'left' }, width: 100, sorting: true },
            { key: 'address', title: '<div class="blue"><i class="fa fa-building"></i>  Address</div>', width: 300, sorting: false, align: { head: 'left', body: 'right' }, noWrap: { head: true, body: true }, cellTemplate: this.addressTpl },
            { key: 'age', title: '<div class="blue"><i class="fa fa-calendar-times-o"></i> Age</div>',width: 60, sorting: true, align: { head: 'center', body: 'center' }},
            { key: 'zip', title: '<div class="blue">Action</div>', align: { head: 'center', body:  'center' }, sorting: false, width: 80, cellTemplate: this.actionTpl }
        ]
        setTimeout(() => {
            this.data = this.appService.get10KData();
            this.dataBK = this.data;
            this.options = {
                ...this.options,
                loader : false
            }
        }, 2000);
    }


    onClickAddBtn() {
        this.data = [
            ...this.data,
            {
                "id": 0,
                "name": "Tushar",
                "gender": "male",
                "age": 29,
                "address": {
                "state": "Dhaka",
                "city": "Dhaka"
                }
            }
        ];
        alert("Hi Add Button! A new data named 'Tushar' has been added.");
    }
    remove(rowInded) {
        alert("Row Index :- "+rowInded);
    }
    edit(row){
        alert(JSON.stringify(row));
    }

    /**
     * Advanced search
     *
     */

    onNameSearch(value) { 
        this.data = this.dataBK.filter(row => row.name.toLowerCase().indexOf(value) > -1);
    }
    onAddressSearch(value) { 
        this.data = this.dataBK.filter(row => JSON.stringify(Object.values(row.address)).toLowerCase().indexOf(value) > -1);
    }
    onGenderSearch(value) { 
        this.data = this.dataBK.filter(row => value == '' ? true : row.gender.toLowerCase()==value);
    }
    onAgeSearch(from, to) { 
        this.data = this.dataBK.filter(row => row.age >= from && row.age <=to);
    }
   

}
