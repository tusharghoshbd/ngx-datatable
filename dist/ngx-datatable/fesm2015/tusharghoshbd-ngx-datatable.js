import { Injectable, Component, ChangeDetectionStrategy, EventEmitter, ChangeDetectorRef, Input, Output, ContentChild, Pipe, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataShowingService {
    constructor() {
        this.dataShowingSubject = new Subject();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    setSataShowingSubject(data) {
        this.dataShowingSubject.next(data);
    }
}
DataShowingService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    DataShowingService.prototype.dataShowingSubject;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CaptionComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CaptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-caption',
                template: "\r\n        \r\n<ng-content></ng-content>\r\n\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
/** @nocollapse */
CaptionComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxDatatableComponent {
    /**
     * @param {?} dataShowingService
     * @param {?} cdr
     */
    constructor(dataShowingService, cdr) {
        this.dataShowingService = dataShowingService;
        this.cdr = cdr;
        this.ngUnsubscribe = new Subject();
        this.customOptions = {
            'emptyDataMessage': 'No data available in table',
            'rowClickEvent': false,
            'rowPerPageMenu': [10, 20, 50, 100],
            'rowPerPage': 10,
            'loader': false,
            'checkboxes': false,
            'rowDetailTemplate': undefined
        };
        this._options = {};
        this._data = [];
        this.tableId = 'ngxDataTableId';
        this.columns = [];
        this.rowClick = new EventEmitter();
        this.checkboxClick = new EventEmitter();
        this.searchText = "";
        this.currentPage = 1;
        this.orderBy = { order: '', key: '' };
        this.dataShowing = { start: 0, end: 0, len: 0 };
        this.styleParams = { pinnedScollerMarginLeft: 0, pinnedFlag: false };
        this.selectedCheckboxes = new Set();
        this.selectedCheckList = [];
        this.openRowDetailsId = new Set();
    }
    /**
     * @param {?} arr
     * @return {?}
     */
    set data(arr) {
        this._data = [];
        arr.forEach((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        (item, index) => {
            this._data.push(Object.assign({}, item, { '_autoId': index }));
        }));
    }
    ;
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    set options(obj) {
        this._options = Object.assign({}, this.customOptions, this._options, obj);
    }
    /**
     * @return {?}
     */
    get options() {
        return this._options;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.columns.map((/**
         * @param {?} item
         * @param {?} i
         * @return {?}
         */
        (item, i) => {
            item['sorting'] = item.hasOwnProperty('sorting') ? item['sorting'] : true;
            item['headAlign'] = item.hasOwnProperty('headAlign') ? item['headAlign'].toLowerCase() : 'left';
            item['sortingOrder'] = '';
            if ((item.hasOwnProperty('pinned') && item['pinned'] == true)) {
                /** working for pin the checkbox column */
                // this.styleParams['pinnedFlag'] = true;
                // if ( this.options.checkboxes == true && this.styleParams['pinnedFlag'] && i ==0) { 
                //     this.styleParams.pinnedScollerMarginLeft = 33;
                // }
                item['width'] = item.hasOwnProperty('width') ? item['width'] : 100;
                item['pinnedMarginLeft'] = this.styleParams.pinnedScollerMarginLeft;
                this.styleParams.pinnedScollerMarginLeft += parseInt(item['width']) + 20;
            }
        }));
        this.dataShowingFn(this.currentPage, this.options.rowPerPage, this.data.length);
        /** subscription list */
        this.dataShowingService.dataShowingSubject.subscribe((/**
         * @param {?} subData
         * @return {?}
         */
        subData => {
            subData['itemPerPage'] = subData.hasOwnProperty('itemPerPage') ? subData.itemPerPage : this.options.rowPerPage;
            subData['currentPage'] = subData.hasOwnProperty('currentPage') ? subData.currentPage : this.currentPage;
            subData['len'] = subData.hasOwnProperty('len') ? subData.len : this.dataShowing.len;
            this.dataShowingFn(subData.currentPage, subData.itemPerPage, subData.len);
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        //console.log(this.headerRef);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        //console.log(changes);
    }
    /**
     * @return {?}
     */
    onInputSearch() {
        this.currentPage = 1;
    }
    /**
     * @return {?}
     */
    onChangeItemPerPage() {
        this.currentPage = 1;
        this.dataShowingService.setSataShowingSubject({ 'currentPage': this.currentPage, 'itemPerPage': this.options.rowPerPage });
    }
    /**
     * @param {?} currentPage
     * @return {?}
     */
    onPageChange(currentPage) {
        this.currentPage = currentPage;
        this.dataShowingService.setSataShowingSubject({ 'currentPage': currentPage });
    }
    /**
     * @param {?} colItem
     * @param {?} index
     * @return {?}
     */
    onClickOrderBy(colItem, index) {
        if (colItem.sorting == true) {
            this.columns.map((/**
             * @param {?} item
             * @return {?}
             */
            (item) => { item.sortingOrder = ''; }));
            this.orderBy = Object.assign({}, this.orderBy, { 'order': this.orderBy.order == 'asc' ? 'desc' : 'asc', 'key': colItem.key });
            this.columns[index]['sortingOrder'] = this.orderBy.order;
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onRowClick(item) {
        if (this.options.rowClickEvent)
            this.rowClick.emit(item);
    }
    /**
     * @param {?} rowObj
     * @return {?}
     */
    onCheckboxSelect(rowObj) {
        if (this.selectedCheckboxes.has(rowObj._autoId)) {
            this.selectedCheckboxes.delete(rowObj._autoId);
            this.selectedCheckList = this.selectedCheckList.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                return item._autoId != rowObj._autoId;
            }));
        }
        else {
            this.selectedCheckboxes.add(rowObj._autoId);
            this.selectedCheckList.push(rowObj);
        }
        this.checkboxClick.emit(this.selectedCheckList);
    }
    /**
     * @param {?} checked
     * @return {?}
     */
    onCheckboxSelectAll(checked) {
        this.selectedCheckboxes = new Set();
        this.selectedCheckList = [];
        if (checked) {
            this.selectedCheckList = this.data.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                this.selectedCheckboxes.add(item._autoId);
                return true;
            }));
        }
        this.checkboxClick.emit(this.selectedCheckList);
    }
    /**
     * @param {?} rowObj
     * @return {?}
     */
    onClickRowDettailArrowOpen(rowObj) {
        if (this.openRowDetailsId.has(rowObj._autoId)) {
            this.openRowDetailsId.delete(rowObj._autoId);
        }
        else {
            this.openRowDetailsId.add(rowObj._autoId);
        }
    }
    /**
     * @return {?}
     */
    onClickRowDettailAllArrowOpen() {
        if (this.openRowDetailsId.size != this.data.length) {
            this.openRowDetailsId = new Set();
            this.data.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                this.openRowDetailsId.add(item._autoId);
                return true;
            }));
        }
        else {
            this.openRowDetailsId = new Set();
        }
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    identify(index, item) {
        return index;
    }
    /**
     * @private
     * @param {?} currentPage
     * @param {?} itemPerPage
     * @param {?} length
     * @return {?}
     */
    dataShowingFn(currentPage, itemPerPage, length) {
        this.dataShowing.start = length == 0 ? 0 : ((currentPage - 1) * itemPerPage) + 1;
        this.dataShowing.end = currentPage * itemPerPage > length ? length : currentPage * itemPerPage;
        this.dataShowing.len = length;
    }
}
NgxDatatableComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-datatable',
                template: "\r\n<div  color=\"darken\" class=\"jarviswidget\">\r\n    <!-- table caption -->\r\n    <header *ngIf=\"captionRef\">\r\n        <ng-content select=\"ngx-caption\"></ng-content>\r\n    </header>\r\n    <div  class=\"dataTables_wrapper\">\r\n        <!-- search bar with page per item -->\r\n        <div class=\"row no-row-margin\" style=\"margin-top: 5px;\">\r\n            <div class=\"col-xs-6 col-sm-6 col-6 text-left\">\r\n                <label style=\"font-weight: 100;\">\r\n                    <input type=\"text\" \r\n                    [id]=\"'search_'+tableId\"\r\n                    [(ngModel)]=\"searchText\" \r\n                    (input)=\"onInputSearch()\"\r\n                    name=\"search\"\r\n                    placeholder=\"Search\"\r\n                    autocomplete=\"off\"\r\n                    style=\"border-radius: 0px;\"\r\n                    class=\"form-control input-md\"  />\r\n                </label>\r\n            </div>\r\n            <div class=\"col-sm-6 col-xs-6 col-6 text-right\">\r\n                <label style=\"font-weight: 100;\">\r\n                    <select (change)=\"onChangeItemPerPage()\" style=\"border-radius: 0px;\" [(ngModel)]=\"options.rowPerPage\" name=\"rowPerPage\" class=\"form-control\"  [id]=\"'itemPerPage_'+tableId\">\r\n                        <option *ngFor=\"let item of options.rowPerPageMenu\" [ngValue]=\"item\">{{item}}</option>\r\n                    </select>\r\n                </label>\r\n            </div>\r\n        </div>\r\n        <div class=\"zui-wrapper\">\r\n            <div class=\"zui-scroller\" [style.margin-left]=\"styleParams.pinnedScollerMarginLeft+'px'\" >\r\n                <table [id]=\"tableId\"  class=\" zui-table dataTable  {{tableClass}}\" role=\"grid\" aria-describedby=\"DataTables_Table_0_info\" width=\"100%\">\r\n                    <!-- table head code -->\r\n                    <thead _ngcontent-qqc-c0=\"\">\r\n                        <tr  role=\"row\" >\r\n                            <th *ngIf=\"options.rowDetailTemplate\" \r\n                                style= \" text-align: center; vertical-align: middle;\">\r\n                                <div (click)=\"onClickRowDettailAllArrowOpen()\"  \r\n                                    [class.triangle-right]=\"this.openRowDetailsId.size != this.data.length || this.data.length == 0 \" \r\n                                    [class.triangle-down]=\"this.openRowDetailsId.size == this.data.length && this.data.length != 0\">\r\n                                </div>\r\n                            </th>\r\n                            <!-- [style.min-width]=\"options.checkboxAsPin && styleParams.pinnedFlag ? '13px' : 'auto'\"\r\n                                [style.max-width]=\"options.checkboxAsPin && styleParams.pinnedFlag ? '13px' : 'auto'\"\r\n                                [class.zui-sticky-col]=\"options.checkboxAsPin && styleParams['pinnedFlag']\" -->\r\n                            <th *ngIf=\"options.checkboxes\"\r\n                                style= \"text-align: center; vertical-align: middle;\">\r\n                                    <input\r\n                                        class=\"ngx-form-checkbox-head\"\r\n                                        type=\"checkbox\"\r\n                                        id=\"checkbox-all\"\r\n                                        [checked]=\"this.selectedCheckboxes.size == this.data.length && this.data.length != 0\"\r\n                                        (change)=\"onCheckboxSelectAll($event.target.checked)\"\r\n                                    />\r\n                            </th>\r\n                            <th  *ngFor=\"let column of columns; let i = index; trackBy: identify\"\r\n                                (click)=\"onClickOrderBy(column, i)\"\r\n                                [style.min-width]=\"column.width+'px'\"\r\n                                [style.max-width]=\"column.width+'px'\" \r\n                                [style.vertical-align]=\"column.vAlign && column.vAlign.head\"\r\n                                [style.text-align]=\"column.align && column.align.head\"\r\n                                [class.zui-sticky-col]=\"column.pinned\"\r\n                                [style.margin-left]=\"column.pinnedMarginLeft+'px'\"yy>\r\n                                <span [innerHTML]=\"column.title\"\r\n                                    [class.wrap]=\"column.noWrap && column.noWrap.head\" \r\n                                    [class.sort-by] = \"column.sorting && column.sortingOrder==''\"\r\n                                    [class.sort-by-asc] = \"column.sorting && column.sortingOrder=='asc'\"\r\n                                    [class.sort-by-desc] = \"column.sorting && column.sortingOrder=='desc'\"\r\n                                 ></span>  \r\n                                <!-- [ngClass]=\"{sort-by:column.sorting==true, sort-by-asc:column.sorting==true&&column.sortingOrder=='asc', sort-by-desc:column.sorting==true&&column.sortingOrder=='desc'}\"  -->\r\n                                <!-- <div class=\"sorting\"style=\"display: inline;\"><span>&#8593;</span> <span>&#8595;</span></div>\t -->\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <ng-container *ngFor=\"let row of data \r\n                            | search:searchText \r\n                            | sort:orderBy \r\n                            | paginate: { id: 'pagination_'+tableId, itemsPerPage: options.rowPerPage, currentPage:currentPage }; \r\n                            trackBy: identify; let i = index;\">\r\n                            <tr [ngClass]=\"{ 'cus-cursor-pointer':options.rowClickEvent}\" \r\n                                (click)=\"onRowClick(row)\" >\r\n                                <!-- row Detail code -->\r\n                                <td *ngIf=\"options.rowDetailTemplate\"   \r\n                                    style= \" text-align: center; vertical-align: middle;\">\r\n                                    <div (click)=\"onClickRowDettailArrowOpen(row)\"  \r\n                                        [class.triangle-right]=\"!openRowDetailsId.has(row._autoId)\" \r\n                                        [class.triangle-down]=\"openRowDetailsId.has(row._autoId)\">\r\n                                    </div>\r\n                                </td>\r\n                                <!-- checck box code -->\r\n                                <!-- [style.min-width]=\"options.checkboxAsPin && styleParams.pinnedFlag ? '13px' : 'auto'\"\r\n                                    [style.max-width]=\"options.checkboxAsPin && styleParams.pinnedFlag ? '13px' : 'auto'\"\r\n                                    [class.zui-sticky-col]=\"options.checkboxAsPin && styleParams['pinnedFlag']\" -->\r\n                                <td *ngIf=\"options.checkboxes\"\r\n                                    style= \"text-align: center; vertical-align: middle;\">\r\n                                        <input\r\n                                            class=\"ngx-form-checkbox\"\r\n                                            type=\"checkbox\"\r\n                                            id=\"checkbox-{{row._autoId}}\"\r\n                                            [checked]=\"selectedCheckboxes.has(row._autoId)\"\r\n                                            (change)=\"onCheckboxSelect(row)\"\r\n                                        />\r\n                                </td>\r\n                                <!-- dynamacally generated column -->\r\n                                <td *ngFor=\"let column of columns;let j=index;\" \r\n                                    [style.min-width]=\"column.width+'px'\" \r\n                                    [style.max-width]=\"column.width+'px'\" \r\n                                    [class.wrap]=\"column.noWrap && column.noWrap.body\"\r\n                                    [style.vertical-align]=\"column.vAlign && column.vAlign.body\"\r\n                                    [style.text-align]=\"column.align && column.align.body\"\r\n                                    [class.zui-sticky-col]=\"column.pinned\"\r\n                                    [style.margin-left]=\"column.pinnedMarginLeft+'px'\"\r\n                                    >\r\n                                    <ng-container *ngIf=\"!column.cellTemplate\">{{row[column.key]}}</ng-container>\r\n                                    <ng-container *ngIf=\"column.cellTemplate\"\r\n                                        [ngTemplateOutlet]=\"column.cellTemplate\"\r\n                                        [ngTemplateOutletContext]=\"{\r\n                                            $implicit: row,\r\n                                            rowIndex: row._autoId,\r\n                                            columnValue: row[column.key]\r\n                                        }\"\r\n                                    >\r\n                                    </ng-container>\r\n                                    \r\n                                </td>\r\n                            </tr>\r\n                            <!-- row detail desccription code -->\r\n                            <tr *ngIf=\"options.rowDetailTemplate && openRowDetailsId.has(row._autoId) \" >\r\n                                <td [attr.colspan]=\"columns.length+(options.checkboxes?1:0)+(options.rowDetailTemplate?1:0)\" >\r\n                                    <ng-container\r\n                                        [ngTemplateOutlet]=\"options.rowDetailTemplate\"\r\n                                        [ngTemplateOutletContext]=\"{\r\n                                            $implicit: row,\r\n                                            rowIndex: row._autoId\r\n                                        }\"\r\n                                    >\r\n                                    </ng-container>\r\n                                </td>\r\n                            </tr>\r\n                        </ng-container>\r\n\r\n                        <tr class=\"odd\" *ngIf=\"!data.length && options.loader == false\" >\r\n                            <td valign=\"top\" [attr.colspan]=\"columns.length+(options.checkboxes?1:0)+(options.rowDetailTemplate?1:0)\" class=\"dataTables_empty\">\r\n                                {{options.emptyDataMessage}}\r\n                            </td>\r\n                        </tr>\r\n                        <tr class=\"odd\" *ngIf=\"options.loader == true\" >\r\n                            <td valign=\"top\" [attr.colspan]=\"columns.length+(options.checkboxes?1:0)+(options.rowDetailTemplate?1:0)\" class=\"dataTables_empty\">\r\n                                Loading...\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div class=\"row no-row-margin\" style=\"margin-top: 5px;\">\r\n            <div class=\"col-sm-6 col-xs-12 col-12 custom-data-entries-align\">\r\n                <div>Showing {{dataShowing.start}} to {{dataShowing.end}} of {{dataShowing.len}} entries</div>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-6 col-12 custom-pagination-align\">\r\n                <pagination-controls [id]=\"'pagination_'+tableId\" (pageChange)=\"onPageChange($event)\"></pagination-controls>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [DataShowingService],
                styles: [".jarviswidget{position:relative;border-radius:0;padding:0}.ui-sortable .jarviswidget-sortable>header{cursor:move;border-radius:0;line-height:normal;box-shadow:inset 0 -2px 0 rgba(0,0,0,.05);-moz-box-shadow:inset 0 -2px 0 rgba(0,0,0,.05);-webkit-box-shadow:inset 0 -2px 0 rgba(0,0,0,.05)}.ui-sortable .jarviswidget-sortable.jarviswidget-collapsed>header{border-radius:0}.jarviswidget-ctrls{width:auto;float:right;padding:0;margin:0}.jarviswidget-ctrls .button-icon{min-width:30px;height:32px;float:left;position:relative;font-family:Arial,Helvetica,sans-serif;border-left:1px solid rgba(0,0,0,.09)}.jarviswidget-ctrls .button-icon:hover{background-color:rgba(0,0,0,.05)}.jarviswidget-loader{width:32px;height:32px;margin:0;float:right;background-repeat:no-repeat;background-position:center center;display:none;text-align:center;line-height:32px;font-size:111%}.jarviswidget>div{border-top:none;float:left;width:100%;position:relative;font-size:13px;border-radius:0;margin:0;border-width:1px 1px 2px;border-style:solid;padding:0;overflow:visible;border-color:#ccc!important}.jarviswidget .widget-body{min-height:100px;position:relative;padding-bottom:13px}.jarviswidget .widget-body.widget-hide-overflow{overflow:hidden}.jarviswidget.well.transparent .widget-body.no-padding{margin:0!important}.jarviswidget.well{margin:0 0 30px}.jarviswidget.well>div{border:none!important;box-shadow:none!important;-webkit-box-shadow:none!important;-moz-box-shadow:none!important}.jarviswidget.well header{display:none}.jarviswidget-editbox{display:none;padding:10px}.jarviswidget-timestamp{font-size:12px;color:#868686;font-style:italic;margin:10px 0 0}.jarviswidget-placeholder{border-radius:0;margin-bottom:28px;padding:0;-khtml-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box}#jarviswidget-fullscreen-mode{width:100%;height:100%;position:fixed;top:0;left:0;z-index:1050}#jarviswidget-fullscreen-mode .jarviswidget{margin:0;border-radius:0}#jarviswidget-fullscreen-mode .jarviswidget>div{overflow-y:scroll;border-radius:0}#jarviswidget-fullscreen-mode>div>header{cursor:default}.jarviswidget>header{color:#333;border:1px solid #c2c2c2;background:#fafafa}.jarviswidget>div{background-color:#fff!important}.jarviswidget-editbox{border-bottom:1px solid #b1b1b1;background-color:#fff;margin:-13px -13px 13px}.no-padding .jarviswidget-editbox{margin:0 0 10px}.jarviswidget-placeholder{background-color:#ffc;border:1px dashed #a7a7a7}.jarviswidget-remove-colors{color:#333!important;padding:0!important;background:0 0!important}table.dataTable{clear:both;margin-bottom:6px!important;max-width:none!important;margin-top:0!important}table.dataTable td,table.dataTable th{box-sizing:content-box}table.dataTable td.dataTables_empty,table.dataTable th.dataTables_empty{text-align:center}table.dataTable.nowrap td,table.dataTable.nowrap th{white-space:nowrap}div.dataTables_wrapper div.dataTables_length label{font-weight:400;text-align:left;white-space:nowrap}div.dataTables_wrapper div.dataTables_length select{width:75px;display:inline-block}div.dataTables_wrapper div.dataTables_filter{text-align:right}div.dataTables_wrapper div.dataTables_filter label{font-weight:400;white-space:nowrap;text-align:left}div.dataTables_wrapper div.dataTables_filter input{margin-left:.5em;display:inline-block;width:auto}div.dataTables_wrapper div.dataTables_info{padding-top:8px;white-space:nowrap}div.dataTables_wrapper div.dataTables_paginate{margin:0;white-space:nowrap;text-align:right}div.dataTables_wrapper div.dataTables_paginate ul.pagination{margin:2px 0;white-space:nowrap}div.dataTables_wrapper div.dataTables_processing{position:absolute;top:50%;left:50%;width:200px;margin-left:-100px;margin-top:-26px;text-align:center;padding:1em 0}table.dataTable thead>tr>th.sorting,table.dataTable thead>tr>th.sorting_asc,table.dataTable thead>tr>th.sorting_desc,table.dataTable thead>tr>th>div.sorting,table.dataTable thead>tr>th>div.sorting_asc{padding-right:30px;text-align:right}.cus-cursor-pointer{cursor:pointer}.zui-table thead th{padding:10px;margin-top:-1px}.zui-table tbody td{padding:10px}.zui-wrapper{overflow:hidden;position:relative;width:100%}.zui-scroller{overflow-x:auto}.zui-table .zui-sticky-col{border-left:1px solid #ddd;border-right:1px solid #ddd;border-top:1px solid #ddd;border-bottom:1px solid #ddd;left:0;position:absolute;background-color:#f1f1f1}.table-bordered>thead>tr>td,.table-bordered>thead>tr>th{border-bottom-width:0}.pinned-column-bg-color{background-color:#f9f9f9;border-left:1px solid #ddd}.jarviswidget header{padding:0 5px;line-height:40px;background-color:#404040;border:1px solid #404040;color:#fff}.wrap{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.no-row-margin{margin-left:0!important;margin-right:0!important}.sort-by,.sort-by-asc,.sort-by-desc{padding-right:18px;position:relative;display:block;width:100%}.sort-by-asc:after,.sort-by-asc:before,.sort-by-desc:after,.sort-by-desc:before,.sort-by:after,.sort-by:before{border:4px solid transparent;content:\"\";display:block;height:0;right:5px;top:50%;position:absolute;width:0}.sort-by:before{border-bottom-color:#666;margin-top:-9px}.sort-by:after{border-top-color:#666;margin-top:1px}.sort-by-asc:before{border-bottom-color:#666;margin-top:-6px}.sort-by-desc:after{border-top-color:#666;margin-top:-1px}.custom-pagination-align{text-align:right!important}.custom-data-entries-align{text-align:left!important}.triangle-down{width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-top:12px solid #555;cursor:pointer}.triangle-right{width:0;height:0;border-top:6px solid transparent;border-left:12px solid #555;border-bottom:6px solid transparent;cursor:pointer}@media screen and (max-width:767px){div.dataTables_wrapper div.dataTables_filter,div.dataTables_wrapper div.dataTables_info,div.dataTables_wrapper div.dataTables_length,div.dataTables_wrapper div.dataTables_paginate{text-align:center}}@media screen and (max-width:576px){.custom-data-entries-align,.custom-pagination-align{text-align:center!important}}"]
            }] }
];
/** @nocollapse */
NgxDatatableComponent.ctorParameters = () => [
    { type: DataShowingService },
    { type: ChangeDetectorRef }
];
NgxDatatableComponent.propDecorators = {
    tableId: [{ type: Input }],
    columns: [{ type: Input }],
    data: [{ type: Input }],
    options: [{ type: Input }],
    tableClass: [{ type: Input }],
    rowClick: [{ type: Output }],
    checkboxClick: [{ type: Output }],
    captionRef: [{ type: ContentChild, args: [CaptionComponent, { static: false },] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxDatatableComponent.prototype.ngUnsubscribe;
    /**
     * @type {?}
     * @private
     */
    NgxDatatableComponent.prototype.customOptions;
    /**
     * @type {?}
     * @private
     */
    NgxDatatableComponent.prototype._options;
    /**
     * @type {?}
     * @private
     */
    NgxDatatableComponent.prototype._data;
    /** @type {?} */
    NgxDatatableComponent.prototype.tableId;
    /** @type {?} */
    NgxDatatableComponent.prototype.columns;
    /** @type {?} */
    NgxDatatableComponent.prototype.tableClass;
    /** @type {?} */
    NgxDatatableComponent.prototype.rowClick;
    /** @type {?} */
    NgxDatatableComponent.prototype.checkboxClick;
    /** @type {?} */
    NgxDatatableComponent.prototype.captionRef;
    /** @type {?} */
    NgxDatatableComponent.prototype.searchText;
    /** @type {?} */
    NgxDatatableComponent.prototype.currentPage;
    /** @type {?} */
    NgxDatatableComponent.prototype.orderBy;
    /** @type {?} */
    NgxDatatableComponent.prototype.dataShowing;
    /** @type {?} */
    NgxDatatableComponent.prototype.styleParams;
    /** @type {?} */
    NgxDatatableComponent.prototype.selectedCheckboxes;
    /** @type {?} */
    NgxDatatableComponent.prototype.selectedCheckList;
    /** @type {?} */
    NgxDatatableComponent.prototype.openRowDetailsId;
    /**
     * @type {?}
     * @private
     */
    NgxDatatableComponent.prototype.dataShowingService;
    /**
     * @type {?}
     * @private
     */
    NgxDatatableComponent.prototype.cdr;
    /* Skipping unhandled member: ;*/
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchPipe {
    /**
     * @param {?} dataShowingService
     */
    constructor(dataShowingService) {
        this.dataShowingService = dataShowingService;
    }
    /**
     * @param {?} array
     * @param {?} searchText
     * @return {?}
     */
    transform(array, searchText) {
        if (typeof array === 'undefined') {
            return;
        }
        if (typeof searchText === 'undefined' || Object.keys(searchText).length === 0 || searchText === '') {
            this.dataShowingService.setSataShowingSubject({ len: array.length });
            return array;
        }
        /** @type {?} */
        const arr = array.filter((/**
         * @param {?} row
         * @return {?}
         */
        (row) => {
            /** @type {?} */
            const rowDetail = JSON.stringify(Object.values(row));
            return rowDetail.toLowerCase().indexOf(searchText.trim().toLowerCase()) > -1;
        }));
        this.dataShowingService.setSataShowingSubject({ len: arr.length });
        return arr;
    }
}
SearchPipe.decorators = [
    { type: Pipe, args: [{
                name: 'search',
            },] }
];
/** @nocollapse */
SearchPipe.ctorParameters = () => [
    { type: DataShowingService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchPipe.prototype.dataShowingService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SortPipe {
    /**
     * @param {?} array
     * @param {?} filter
     * @return {?}
     */
    transform(array, filter) {
        // console.log("sort pipe" + JSON.stringify(filter));
        // console.log(array);
        if (!filter.key || filter.key === '') {
            return array;
        }
        if (filter.order === '') {
            return array;
        }
        if (filter.order === 'asc') {
            return array.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => this.compare(a, b, filter.key)));
        }
        else {
            return array.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => this.compare(b, a, filter.key)));
        }
    }
    /**
     * @private
     * @param {?} a
     * @param {?} b
     * @param {?} key
     * @return {?}
     */
    compare(a, b, key) {
        //return ('' + a[key]).localeCompare(b[key]);
        //console.log(this.isNaN(a, b));
        if (this.isNaN(a[key], b[key])) {
            return ('' + a[key]).localeCompare(b[key]);
        }
        else {
            if (parseFloat(a[key]) < parseFloat(b[key])) {
                return -1;
            }
            if (parseFloat(a[key]) > parseFloat(b[key])) {
                return 1;
            }
        }
        return 0;
    }
    /**
     * @private
     * @param {?} aV
     * @param {?} bV
     * @return {?}
     */
    isNaN(aV, bV) {
        return (isNaN(parseFloat(aV)) || !isFinite(aV)) || (isNaN(parseFloat(bV)) || !isFinite(bV));
    }
}
SortPipe.decorators = [
    { type: Pipe, args: [{
                name: 'sort',
                pure: true //default pure = true
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxDatatableModule {
}
NgxDatatableModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgxDatatableComponent, SearchPipe, SortPipe, CaptionComponent],
                imports: [
                    FormsModule,
                    CommonModule,
                    NgxPaginationModule
                ],
                providers: [],
                exports: [NgxDatatableComponent, CaptionComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxDatatableComponent, NgxDatatableModule, DataShowingService as ɵa, CaptionComponent as ɵb, SearchPipe as ɵc, SortPipe as ɵd };
//# sourceMappingURL=tusharghoshbd-ngx-datatable.js.map
