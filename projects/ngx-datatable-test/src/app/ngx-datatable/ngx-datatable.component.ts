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
    orderBy: { order: string, key: string } ={order:'', key:''};
    constructor() { }

    ngOnInit() {
        this.columns.map((item) => { 
            item['sorting'] = item.hasOwnProperty('sorting') ? item['sorting'] : true;
            item['sortingOrder'] = '';
        })
    }

    onInputSearch(){
        this.currentPage = 1;
    }
    onChangeItemPerPage(){
        this.currentPage = 1;
    }
    onClickOrderBy(colItem: any, index:number) { 
        if (colItem.sorting == true) { 
            this.columns.map((item) => { item.sortingOrder = ''})
            this.orderBy.order = this.orderBy.order == 'asc' ? 'desc' : 'asc';
            this.orderBy.key = colItem.key;
            this.columns[index]['sortingOrder'] = this.orderBy.order;
        }
        //console.log(this.orderBy);
    }
    identify(index, item) {
        return index;
    }
}
