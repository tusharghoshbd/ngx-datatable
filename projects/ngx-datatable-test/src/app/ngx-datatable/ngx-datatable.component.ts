import { Component, OnInit,Input } from '@angular/core';

@Component({
    selector: 'ngx-datatable',
    templateUrl: './ngx-datatable.component.html',
    styleUrls: ['./ngx-datatable.component.css']
  })
export class NgxDatatableComponent implements OnInit {

    @Input() data:any[];
    @Input() columns:any[];
    @Input() options: any;
    
    searchText: string = "";
    itemPerPage = 10;
    itemPerPageDDL:any = [10,20,50,100];
    currentPage = 1;
    constructor() { }

    ngOnInit() {
        //console.log(this.columns);
    }

    onInputSearch(){
        this.currentPage = 1;
    }
    onChangeItemPerPage(){
        this.currentPage = 1;
    }
    identify(index, item) {
        return index;
    }
}
