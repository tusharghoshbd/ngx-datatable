/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ContentChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { DataShowingService } from '../services/data-showing.service';
import { CaptionComponent } from './caption/caption.component';
export class NgxDatatableComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdHVzaGFyZ2hvc2hiZC9uZ3gtZGF0YXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9uZ3gtZGF0YXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLE1BQU0sRUFBZ0IsWUFBWSxFQUFFLFlBQVksRUFBaUMsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDak0sT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQVUvRCxNQUFNLE9BQU8scUJBQXFCOzs7OztJQXdEOUIsWUFDWSxrQkFBc0MsRUFDckMsR0FBc0I7UUFEdkIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUNyQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXpEM0Isa0JBQWEsR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUNuRCxrQkFBYSxHQUFHO1lBQ3BCLGtCQUFrQixFQUFFLDRCQUE0QjtZQUNoRCxlQUFlLEVBQUUsS0FBSztZQUN0QixnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQztZQUNuQyxZQUFZLEVBQUUsRUFBRTtZQUNoQixRQUFRLEVBQUUsS0FBSztZQUNmLFlBQVksRUFBRSxLQUFLO1lBQ25CLG1CQUFtQixFQUFDLFNBQVM7U0FDaEMsQ0FBQztRQUNNLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFDbkIsVUFBSyxHQUFVLEVBQUUsQ0FBQztRQUdqQixZQUFPLEdBQUcsZ0JBQWdCLENBQUM7UUFDM0IsWUFBTyxHQUFVLEVBQUUsQ0FB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QUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9GLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztJQUNsQyxDQUFDOzs7WUF6TEosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxlQUFlO2dCQUN6QiwrNldBQTZDO2dCQUU3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7O2FBRWxDOzs7O1lBVlEsa0JBQWtCO1lBRjZILGlCQUFpQjs7O3NCQTRCcEssS0FBSztzQkFDTCxLQUFLO21CQUNMLEtBQUs7c0JBYUwsS0FBSzt5QkFVTCxLQUFLO3VCQUNMLE1BQU07NEJBQ04sTUFBTTt5QkFDTixZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7Ozs7O0lBMUNqRCw4Q0FBMkQ7Ozs7O0lBQzNELDhDQVFFOzs7OztJQUNGLHlDQUEyQjs7Ozs7SUFDM0Isc0NBQTBCOztJQUcxQix3Q0FBb0M7O0lBQ3BDLHdDQUE2Qjs7SUF3QjdCLDJDQUF5Qjs7SUFDekIseUNBQWdFOztJQUNoRSw4Q0FBcUU7O0lBQ3JFLDJDQUErRTs7SUFFL0UsMkNBQXdCOztJQUN4Qiw0Q0FBZ0I7O0lBQ2hCLHdDQUFpRTs7SUFDakUsNENBQXVGOztJQUN2Riw0Q0FBb0U7O0lBRXBFLG1EQUErQjs7SUFDL0Isa0RBQThCOztJQUU5QixpREFBNkI7Ozs7O0lBR3pCLG1EQUE4Qzs7Ozs7SUFDOUMsb0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uQ2hhbmdlcywgSW5wdXQsIE91dHB1dCxTaW1wbGVDaGFuZ2VzLCBFdmVudEVtaXR0ZXIsIENvbnRlbnRDaGlsZCwgQWZ0ZXJDb250ZW50SW5pdCwgVGVtcGxhdGVSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IERhdGFTaG93aW5nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2RhdGEtc2hvd2luZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2FwdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY2FwdGlvbi9jYXB0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmd4LWRhdGF0YWJsZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmd4LWRhdGF0YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9uZ3gtZGF0YXRhYmxlLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgcHJvdmlkZXJzOiBbRGF0YVNob3dpbmdTZXJ2aWNlXVxyXG4gICAgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hEYXRhdGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcclxuICAgIHByaXZhdGUgbmdVbnN1YnNjcmliZTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgICBwcml2YXRlIGN1c3RvbU9wdGlvbnMgPSB7XHJcbiAgICAgICAgJ2VtcHR5RGF0YU1lc3NhZ2UnOiAnTm8gZGF0YSBhdmFpbGFibGUgaW4gdGFibGUnLFxyXG4gICAgICAgICdyb3dDbGlja0V2ZW50JzogZmFsc2UsXHJcbiAgICAgICAgJ3Jvd1BlclBhZ2VNZW51JzogWzEwLCAyMCwgNTAsIDEwMF0sXHJcbiAgICAgICAgJ3Jvd1BlclBhZ2UnOiAxMCxcclxuICAgICAgICAnbG9hZGVyJzogZmFsc2UsXHJcbiAgICAgICAgJ2NoZWNrYm94ZXMnOiBmYWxzZSxcclxuICAgICAgICAncm93RGV0YWlsVGVtcGxhdGUnOnVuZGVmaW5lZFxyXG4gICAgfTtcclxuICAgIHByaXZhdGUgX29wdGlvbnM6IGFueSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBfZGF0YTogYW55W10gPSBbXTtcclxuXHJcblxyXG4gICAgQElucHV0KCkgdGFibGVJZCA9ICduZ3hEYXRhVGFibGVJZCc7XHJcbiAgICBASW5wdXQoKSBjb2x1bW5zOiBhbnlbXSA9IFtdO1xyXG4gICAgQElucHV0KCkgc2V0IGRhdGEoYXJyOmFueVtdKSB7IFxyXG4gICAgICAgIHRoaXMuX2RhdGEgPSBbXTtcclxuICAgICAgICBhcnIuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fZGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgICAgICAgICAnX2F1dG9JZCc6IGluZGV4XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGdldCBkYXRhKCk6IGFueVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQElucHV0KCkgc2V0IG9wdGlvbnMob2JqOmFueSkgeyBcclxuICAgICAgICB0aGlzLl9vcHRpb25zID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLmN1c3RvbU9wdGlvbnMsXHJcbiAgICAgICAgICAgIC4uLnRoaXMuX29wdGlvbnMsXHJcbiAgICAgICAgICAgIC4uLm9ialxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBnZXQgb3B0aW9ucygpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xyXG4gICAgfVxyXG4gICAgQElucHV0KCkgdGFibGVDbGFzczogYW55O1xyXG4gICAgQE91dHB1dCgpIHJvd0NsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIGNoZWNrYm94Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAQ29udGVudENoaWxkKENhcHRpb25Db21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSBjYXB0aW9uUmVmOiBDYXB0aW9uQ29tcG9uZW50XHJcblxyXG4gICAgc2VhcmNoVGV4dDogc3RyaW5nID0gXCJcIjtcclxuICAgIGN1cnJlbnRQYWdlID0gMTtcclxuICAgIG9yZGVyQnk6IHsgb3JkZXI6IHN0cmluZywga2V5OiBzdHJpbmcgfSA9IHsgb3JkZXI6ICcnLCBrZXk6ICcnIH07XHJcbiAgICBkYXRhU2hvd2luZzogeyBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciwgbGVuOiBudW1iZXIgfSA9IHsgc3RhcnQ6IDAsIGVuZDogMCwgbGVuOiAwIH1cclxuICAgIHN0eWxlUGFyYW1zOiBhbnkgPSB7IHBpbm5lZFNjb2xsZXJNYXJnaW5MZWZ0OiAwLCBwaW5uZWRGbGFnOmZhbHNlIH07XHJcblxyXG4gICAgc2VsZWN0ZWRDaGVja2JveGVzID0gbmV3IFNldCgpO1xyXG4gICAgc2VsZWN0ZWRDaGVja0xpc3Q6IGFueVtdID0gW107XHJcbiAgICBcclxuICAgIG9wZW5Sb3dEZXRhaWxzSWQgPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBkYXRhU2hvd2luZ1NlcnZpY2U6IERhdGFTaG93aW5nU2VydmljZSxcclxuICAgICAgICBwcml2YXRlICBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNvbHVtbnMubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW1bJ3NvcnRpbmcnXSA9IGl0ZW0uaGFzT3duUHJvcGVydHkoJ3NvcnRpbmcnKSA/IGl0ZW1bJ3NvcnRpbmcnXSA6IHRydWU7XHJcbiAgICAgICAgICAgIGl0ZW1bJ2hlYWRBbGlnbiddID0gaXRlbS5oYXNPd25Qcm9wZXJ0eSgnaGVhZEFsaWduJykgPyBpdGVtWydoZWFkQWxpZ24nXS50b0xvd2VyQ2FzZSgpIDogJ2xlZnQnO1xyXG4gICAgICAgICAgICBpdGVtWydzb3J0aW5nT3JkZXInXSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgaWYgKCAoaXRlbS5oYXNPd25Qcm9wZXJ0eSgncGlubmVkJykgJiYgaXRlbVsncGlubmVkJ10gPT0gdHJ1ZSkgKSB7XHJcbiAgICAgICAgICAgICAgICAvKiogd29ya2luZyBmb3IgcGluIHRoZSBjaGVja2JveCBjb2x1bW4gKi9cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc3R5bGVQYXJhbXNbJ3Bpbm5lZEZsYWcnXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoIHRoaXMub3B0aW9ucy5jaGVja2JveGVzID09IHRydWUgJiYgdGhpcy5zdHlsZVBhcmFtc1sncGlubmVkRmxhZyddICYmIGkgPT0wKSB7IFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuc3R5bGVQYXJhbXMucGlubmVkU2NvbGxlck1hcmdpbkxlZnQgPSAzMztcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtWyd3aWR0aCddID0gaXRlbS5oYXNPd25Qcm9wZXJ0eSgnd2lkdGgnKSA/IGl0ZW1bJ3dpZHRoJ10gOiAxMDA7XHJcbiAgICAgICAgICAgICAgICBpdGVtWydwaW5uZWRNYXJnaW5MZWZ0J10gPSB0aGlzLnN0eWxlUGFyYW1zLnBpbm5lZFNjb2xsZXJNYXJnaW5MZWZ0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZVBhcmFtcy5waW5uZWRTY29sbGVyTWFyZ2luTGVmdCArPSBwYXJzZUludChpdGVtWyd3aWR0aCddKSArIDIwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhU2hvd2luZ0ZuKHRoaXMuY3VycmVudFBhZ2UsIHRoaXMub3B0aW9ucy5yb3dQZXJQYWdlLCB0aGlzLmRhdGEubGVuZ3RoKVxyXG5cclxuICAgICAgICAvKiogc3Vic2NyaXB0aW9uIGxpc3QgKi9cclxuICAgICAgICB0aGlzLmRhdGFTaG93aW5nU2VydmljZS5kYXRhU2hvd2luZ1N1YmplY3Quc3Vic2NyaWJlKHN1YkRhdGEgPT4ge1xyXG4gICAgICAgICAgICBzdWJEYXRhWydpdGVtUGVyUGFnZSddID0gc3ViRGF0YS5oYXNPd25Qcm9wZXJ0eSgnaXRlbVBlclBhZ2UnKSA/IHN1YkRhdGEuaXRlbVBlclBhZ2UgOiB0aGlzLm9wdGlvbnMucm93UGVyUGFnZTtcclxuICAgICAgICAgICAgc3ViRGF0YVsnY3VycmVudFBhZ2UnXSA9IHN1YkRhdGEuaGFzT3duUHJvcGVydHkoJ2N1cnJlbnRQYWdlJykgPyBzdWJEYXRhLmN1cnJlbnRQYWdlIDogdGhpcy5jdXJyZW50UGFnZTtcclxuICAgICAgICAgICAgc3ViRGF0YVsnbGVuJ10gPSBzdWJEYXRhLmhhc093blByb3BlcnR5KCdsZW4nKSA/IHN1YkRhdGEubGVuIDogdGhpcy5kYXRhU2hvd2luZy5sZW47XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNob3dpbmdGbihzdWJEYXRhLmN1cnJlbnRQYWdlLCBzdWJEYXRhLml0ZW1QZXJQYWdlLCBzdWJEYXRhLmxlbilcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmhlYWRlclJlZik7XHJcbiAgICB9XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7IFxyXG4gICAgICAgIC8vY29uc29sZS5sb2coY2hhbmdlcyk7XHJcbiAgICB9XHJcbiAgICBvbklucHV0U2VhcmNoKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgfVxyXG4gICAgb25DaGFuZ2VJdGVtUGVyUGFnZSgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcclxuICAgICAgICB0aGlzLmRhdGFTaG93aW5nU2VydmljZS5zZXRTYXRhU2hvd2luZ1N1YmplY3QoeyAnY3VycmVudFBhZ2UnOiB0aGlzLmN1cnJlbnRQYWdlLCAnaXRlbVBlclBhZ2UnOiB0aGlzLm9wdGlvbnMucm93UGVyUGFnZSB9KTtcclxuICAgIH1cclxuICAgIG9uUGFnZUNoYW5nZShjdXJyZW50UGFnZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBjdXJyZW50UGFnZTtcclxuICAgICAgICB0aGlzLmRhdGFTaG93aW5nU2VydmljZS5zZXRTYXRhU2hvd2luZ1N1YmplY3QoeyAnY3VycmVudFBhZ2UnOiBjdXJyZW50UGFnZSB9KTtcclxuICAgIH1cclxuICAgIG9uQ2xpY2tPcmRlckJ5KGNvbEl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChjb2xJdGVtLnNvcnRpbmcgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMubWFwKChpdGVtKSA9PiB7IGl0ZW0uc29ydGluZ09yZGVyID0gJycgfSk7XHJcbiAgICAgICAgICAgIHRoaXMub3JkZXJCeSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMub3JkZXJCeSxcclxuICAgICAgICAgICAgICAgICdvcmRlcic6IHRoaXMub3JkZXJCeS5vcmRlciA9PSAnYXNjJyA/ICdkZXNjJyA6ICdhc2MnLFxyXG4gICAgICAgICAgICAgICAgJ2tleScgOiBjb2xJdGVtLmtleVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnNbaW5kZXhdWydzb3J0aW5nT3JkZXInXSA9IHRoaXMub3JkZXJCeS5vcmRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvblJvd0NsaWNrKGl0ZW06IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucm93Q2xpY2tFdmVudClcclxuICAgICAgICAgICAgdGhpcy5yb3dDbGljay5lbWl0KGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hlY2tib3hTZWxlY3Qocm93T2JqOiBhbnkpIHsgXHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDaGVja2JveGVzLmhhcyhyb3dPYmouX2F1dG9JZCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENoZWNrYm94ZXMuZGVsZXRlKHJvd09iai5fYXV0b0lkKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENoZWNrTGlzdCA9IHRoaXMuc2VsZWN0ZWRDaGVja0xpc3QuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uX2F1dG9JZCAhPSByb3dPYmouX2F1dG9JZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgeyBcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENoZWNrYm94ZXMuYWRkKHJvd09iai5fYXV0b0lkKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENoZWNrTGlzdC5wdXNoKHJvd09iaik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hlY2tib3hDbGljay5lbWl0KHRoaXMuc2VsZWN0ZWRDaGVja0xpc3QpO1xyXG4gICAgfVxyXG4gICAgb25DaGVja2JveFNlbGVjdEFsbChjaGVja2VkKSB7IFxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDaGVja2JveGVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDaGVja0xpc3QgPSBbXTtcclxuICAgICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2hlY2tMaXN0ID0gdGhpcy5kYXRhLmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGVja2JveGVzLmFkZChpdGVtLl9hdXRvSWQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoZWNrYm94Q2xpY2suZW1pdCh0aGlzLnNlbGVjdGVkQ2hlY2tMaXN0KTtcclxuICAgIH1cclxuICAgIG9uQ2xpY2tSb3dEZXR0YWlsQXJyb3dPcGVuKHJvd09iajphbnkpIHsgXHJcbiAgICAgICAgaWYgKHRoaXMub3BlblJvd0RldGFpbHNJZC5oYXMocm93T2JqLl9hdXRvSWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlblJvd0RldGFpbHNJZC5kZWxldGUocm93T2JqLl9hdXRvSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHsgXHJcbiAgICAgICAgICAgIHRoaXMub3BlblJvd0RldGFpbHNJZC5hZGQocm93T2JqLl9hdXRvSWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uQ2xpY2tSb3dEZXR0YWlsQWxsQXJyb3dPcGVuKCkgeyBcclxuICAgICAgICBpZiAodGhpcy5vcGVuUm93RGV0YWlsc0lkLnNpemUgIT0gdGhpcy5kYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW5Sb3dEZXRhaWxzSWQgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5Sb3dEZXRhaWxzSWQuYWRkKGl0ZW0uX2F1dG9JZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgeyBcclxuICAgICAgICAgICAgdGhpcy5vcGVuUm93RGV0YWlsc0lkID0gbmV3IFNldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpZGVudGlmeShpbmRleCwgaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpbmRleDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZGF0YVNob3dpbmdGbihjdXJyZW50UGFnZSwgaXRlbVBlclBhZ2UsIGxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuZGF0YVNob3dpbmcuc3RhcnQgPSBsZW5ndGggPT0gMCA/IDAgOiAoKGN1cnJlbnRQYWdlIC0gMSkgKiBpdGVtUGVyUGFnZSkgKyAxO1xyXG4gICAgICAgIHRoaXMuZGF0YVNob3dpbmcuZW5kID0gY3VycmVudFBhZ2UgKiBpdGVtUGVyUGFnZSA+IGxlbmd0aCA/IGxlbmd0aCA6IGN1cnJlbnRQYWdlICogaXRlbVBlclBhZ2U7XHJcbiAgICAgICAgdGhpcy5kYXRhU2hvd2luZy5sZW4gPSBsZW5ndGg7XHJcbiAgICB9XHJcbn1cclxuIl19