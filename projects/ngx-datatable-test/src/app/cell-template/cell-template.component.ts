import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-cell-template',
  templateUrl: './cell-template.component.html'
})

export class CellTemplateComponent implements OnInit  {
    @ViewChild('actionTpl', { static: true }) actionTpl: TemplateRef<any>;
    @ViewChild('addressTpl', { static: true }) addressTpl: TemplateRef<any>;
    options = {};
    data = [];
    columns: any = {};
    columnsWithFeatures:any
    constructor(private appService:AppService) { }
    ngOnInit(): void {
      
        this.options = {
            loader: true
        }
        this.columns = [
            { key: 'id', title: '<div class="blue"><i class="fa fa-id-card-o"></i> ID</div>',  width: 60, sorting: true },
            { key: 'name', title: '<div class="blue"><i class="fa fa-user"></i> Name</div>', width: 100 },
            { key: 'gender', title: '<div class="blue"><i class="fa fa-phone"></i> Gender</div>', align: { head: 'left' }, width: 100, sorting: true },
            { key: 'address', title: '<div class="blue"><i class="fa fa-building"></i>  Company</div>', width: 300, sorting: true, align: { head: 'left', body: 'right' }, noWrap: { head: true, body: true }, cellTemplate: this.addressTpl },
            { key: 'age', title: '<div class="blue"><i class="fa fa-calendar-times-o"></i> Date</div>', sorting: false},
            { key: 'zip', title: '<div class="blue">Action</div>', align: { head: 'center', body:  'center' }, sorting: false, width: 80, cellTemplate: this.actionTpl }
        ]
        setTimeout(() => {
            this.data = this.appService.get100KData();
            this.options = {
                ...this.options,
                loader : false
            }
        }, 2000);
        console.log(this.appService.get100KData())
       
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
