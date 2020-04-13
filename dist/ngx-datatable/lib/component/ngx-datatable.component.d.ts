import { OnInit, OnChanges, SimpleChanges, EventEmitter, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { DataShowingService } from '../services/data-showing.service';
import { CaptionComponent } from './caption/caption.component';
export declare class NgxDatatableComponent implements OnInit, AfterContentInit, OnChanges {
    private dataShowingService;
    private cdr;
    private ngUnsubscribe;
    private customOptions;
    private _options;
    private _data;
    tableId: string;
    columns: any[];
    data: any[];
    options: any;
    tableClass: any;
    rowClick: EventEmitter<any>;
    checkboxClick: EventEmitter<any>;
    captionRef: CaptionComponent;
    searchText: string;
    currentPage: number;
    orderBy: {
        order: string;
        key: string;
    };
    dataShowing: {
        start: number;
        end: number;
        len: number;
    };
    styleParams: any;
    selectedCheckboxes: Set<any>;
    selectedCheckList: any[];
    openRowDetailsId: Set<any>;
    constructor(dataShowingService: DataShowingService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onInputSearch(): void;
    onChangeItemPerPage(): void;
    onPageChange(currentPage: any): void;
    onClickOrderBy(colItem: any, index: number): void;
    onRowClick(item: any): void;
    onCheckboxSelect(rowObj: any): void;
    onCheckboxSelectAll(checked: any): void;
    onClickRowDettailArrowOpen(rowObj: any): void;
    onClickRowDettailAllArrowOpen(): void;
    identify(index: any, item: any): any;
    private dataShowingFn;
}
