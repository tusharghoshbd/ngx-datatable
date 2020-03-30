import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { DataShowingService } from '../services/data-showing.service';

@Component({
    selector: 'ngx-datatable',
    templateUrl: './ngx-datatable.component.html',
    styleUrls: ['./ngx-datatable.component.css']
})
export class NgxDatatableComponent implements OnInit {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    @Input() data: any[];
    @Input() columns: any[];
    @Input() options: any;
    @Output() rowClick: EventEmitter<any> = new EventEmitter<any>();

    searchText: string = "";
    itemPerPage = 10;
    itemPerPageDDL: any = [10, 20, 50, 100];
    currentPage = 1;
    orderBy: { order: string, key: string } = { order: '', key: '' };
    dataShowing: { start: number, end: number, len: number } = { start: 0, end: 0, len: 0 }

    styleParams: any = { pinnedScollerMarginLeft: 0 };

    constructor(private dataShowingService: DataShowingService) { }

    ngOnInit() {
        this.columns.map((item) => {
            item['sorting'] = item.hasOwnProperty('sorting') ? item['sorting'] : true;
            item['headAlign'] = item.hasOwnProperty('headAlign') ? item['headAlign'].toLowerCase() : 'left';
            item['sortingOrder'] = '';
            
            if(item.hasOwnProperty('pinned') && item['pinned'] == true){
                item['width'] = item.hasOwnProperty('width') ? item['width'] : 100;
                item['pinnedMarginLeft'] = this.styleParams.pinnedScollerMarginLeft;
                this.styleParams.pinnedScollerMarginLeft += parseInt(item['width'])+20;
            }
            
        })

        this.dataShowingFn(this.currentPage, this.itemPerPage, this.data.length)

        /** subscription list */
        this.dataShowingService.dataShowingSubject.subscribe(subData => {
            subData['itemPerPage'] = subData.hasOwnProperty('itemPerPage') ? subData.itemPerPage : this.itemPerPage;
            subData['currentPage'] = subData.hasOwnProperty('currentPage') ? subData.currentPage : this.currentPage;
            subData['len'] = subData.hasOwnProperty('len') ? subData.len : this.dataShowing.len;
            this.dataShowingFn(subData.currentPage, subData.itemPerPage, subData.len)
        });


    }

    onInputSearch() {
        this.currentPage = 1;
    }
    onChangeItemPerPage() {
        this.currentPage = 1;
        this.dataShowingService.setSataShowingSubject({ 'currentPage': this.currentPage, 'itemPerPage': this.itemPerPage });
    }
    onPageChange(currentPage) {
        this.currentPage = currentPage;
        this.dataShowingService.setSataShowingSubject({ 'currentPage': currentPage });
    }
    onClickOrderBy(colItem: any, index: number) {
        if (colItem.sorting == true) {
            this.columns.map((item) => { item.sortingOrder = '' })
            this.orderBy.order = this.orderBy.order == 'asc' ? 'desc' : 'asc';
            this.orderBy.key = colItem.key;
            this.columns[index]['sortingOrder'] = this.orderBy.order;
        }
    }
    onRowClick(item: any) {
        if (this.options.rowClickEvent)
            this.rowClick.emit(item);
    }
    identify(index, item) {
        return index;
    }
    private dataShowingFn(currentPage, itemPerPage, length) {
        this.dataShowing.start = length == 0 ? 0 : ((currentPage - 1) * itemPerPage) + 1;
        this.dataShowing.end = currentPage * itemPerPage > length ? length : currentPage * itemPerPage;
        this.dataShowing.len = length;
    }
}
