/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ContentChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { DataShowingService } from '../services/data-showing.service';
import { CaptionComponent } from './caption/caption.component';
var NgxDatatableComponent = /** @class */ (function () {
    function NgxDatatableComponent(dataShowingService, cdr) {
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
    Object.defineProperty(NgxDatatableComponent.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data;
        },
        set: /**
         * @param {?} arr
         * @return {?}
         */
        function (arr) {
            var _this = this;
            this._data = [];
            arr.forEach((/**
             * @param {?} item
             * @param {?} index
             * @return {?}
             */
            function (item, index) {
                _this._data.push(tslib_1.__assign({}, item, { '_autoId': index }));
            }));
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NgxDatatableComponent.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this._options;
        },
        set: /**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            this._options = tslib_1.__assign({}, this.customOptions, this._options, obj);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxDatatableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.columns.map((/**
         * @param {?} item
         * @param {?} i
         * @return {?}
         */
        function (item, i) {
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
                item['pinnedMarginLeft'] = _this.styleParams.pinnedScollerMarginLeft;
                _this.styleParams.pinnedScollerMarginLeft += parseInt(item['width']) + 20;
            }
        }));
        this.dataShowingFn(this.currentPage, this.options.rowPerPage, this.data.length);
        /** subscription list */
        this.dataShowingService.dataShowingSubject.subscribe((/**
         * @param {?} subData
         * @return {?}
         */
        function (subData) {
            subData['itemPerPage'] = subData.hasOwnProperty('itemPerPage') ? subData.itemPerPage : _this.options.rowPerPage;
            subData['currentPage'] = subData.hasOwnProperty('currentPage') ? subData.currentPage : _this.currentPage;
            subData['len'] = subData.hasOwnProperty('len') ? subData.len : _this.dataShowing.len;
            _this.dataShowingFn(subData.currentPage, subData.itemPerPage, subData.len);
        }));
    };
    /**
     * @return {?}
     */
    NgxDatatableComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        //console.log(this.headerRef);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxDatatableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        //console.log(changes);
    };
    /**
     * @return {?}
     */
    NgxDatatableComponent.prototype.onInputSearch = /**
     * @return {?}
     */
    function () {
        this.currentPage = 1;
    };
    /**
     * @return {?}
     */
    NgxDatatableComponent.prototype.onChangeItemPerPage = /**
     * @return {?}
     */
    function () {
        this.currentPage = 1;
        this.dataShowingService.setSataShowingSubject({ 'currentPage': this.currentPage, 'itemPerPage': this.options.rowPerPage });
    };
    /**
     * @param {?} currentPage
     * @return {?}
     */
    NgxDatatableComponent.prototype.onPageChange = /**
     * @param {?} currentPage
     * @return {?}
     */
    function (currentPage) {
        this.currentPage = currentPage;
        this.dataShowingService.setSataShowingSubject({ 'currentPage': currentPage });
    };
    /**
     * @param {?} colItem
     * @param {?} index
     * @return {?}
     */
    NgxDatatableComponent.prototype.onClickOrderBy = /**
     * @param {?} colItem
     * @param {?} index
     * @return {?}
     */
    function (colItem, index) {
        if (colItem.sorting == true) {
            this.columns.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { item.sortingOrder = ''; }));
            this.orderBy = tslib_1.__assign({}, this.orderBy, { 'order': this.orderBy.order == 'asc' ? 'desc' : 'asc', 'key': colItem.key });
            this.columns[index]['sortingOrder'] = this.orderBy.order;
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NgxDatatableComponent.prototype.onRowClick = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this.options.rowClickEvent)
            this.rowClick.emit(item);
    };
    /**
     * @param {?} rowObj
     * @return {?}
     */
    NgxDatatableComponent.prototype.onCheckboxSelect = /**
     * @param {?} rowObj
     * @return {?}
     */
    function (rowObj) {
        if (this.selectedCheckboxes.has(rowObj._autoId)) {
            this.selectedCheckboxes.delete(rowObj._autoId);
            this.selectedCheckList = this.selectedCheckList.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return item._autoId != rowObj._autoId;
            }));
        }
        else {
            this.selectedCheckboxes.add(rowObj._autoId);
            this.selectedCheckList.push(rowObj);
        }
        this.checkboxClick.emit(this.selectedCheckList);
    };
    /**
     * @param {?} checked
     * @return {?}
     */
    NgxDatatableComponent.prototype.onCheckboxSelectAll = /**
     * @param {?} checked
     * @return {?}
     */
    function (checked) {
        var _this = this;
        this.selectedCheckboxes = new Set();
        this.selectedCheckList = [];
        if (checked) {
            this.selectedCheckList = this.data.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                _this.selectedCheckboxes.add(item._autoId);
                return true;
            }));
        }
        this.checkboxClick.emit(this.selectedCheckList);
    };
    /**
     * @param {?} rowObj
     * @return {?}
     */
    NgxDatatableComponent.prototype.onClickRowDettailArrowOpen = /**
     * @param {?} rowObj
     * @return {?}
     */
    function (rowObj) {
        if (this.openRowDetailsId.has(rowObj._autoId)) {
            this.openRowDetailsId.delete(rowObj._autoId);
        }
        else {
            this.openRowDetailsId.add(rowObj._autoId);
        }
    };
    /**
     * @return {?}
     */
    NgxDatatableComponent.prototype.onClickRowDettailAllArrowOpen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.openRowDetailsId.size != this.data.length) {
            this.openRowDetailsId = new Set();
            this.data.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                _this.openRowDetailsId.add(item._autoId);
                return true;
            }));
        }
        else {
            this.openRowDetailsId = new Set();
        }
    };
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    NgxDatatableComponent.prototype.identify = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        return index;
    };
    /**
     * @private
     * @param {?} currentPage
     * @param {?} itemPerPage
     * @param {?} length
     * @return {?}
     */
    NgxDatatableComponent.prototype.dataShowingFn = /**
     * @private
     * @param {?} currentPage
     * @param {?} itemPerPage
     * @param {?} length
     * @return {?}
     */
    function (currentPage, itemPerPage, length) {
        this.dataShowing.start = length == 0 ? 0 : ((currentPage - 1) * itemPerPage) + 1;
        this.dataShowing.end = currentPage * itemPerPage > length ? length : currentPage * itemPerPage;
        this.dataShowing.len = length;
    };
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
    NgxDatatableComponent.ctorParameters = function () { return [
        { type: DataShowingService },
        { type: ChangeDetectorRef }
    ]; };
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
    return NgxDatatableComponent;
}());
export { NgxDatatableComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdHVzaGFyZ2hvc2hiZC9uZ3gtZGF0YXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9uZ3gtZGF0YXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLEVBQWdCLFlBQVksRUFBRSxZQUFZLEVBQWlDLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pNLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFL0Q7SUFnRUksK0JBQ1ksa0JBQXNDLEVBQ3JDLEdBQXNCO1FBRHZCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDckMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUF6RDNCLGtCQUFhLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7UUFDbkQsa0JBQWEsR0FBRztZQUNwQixrQkFBa0IsRUFBRSw0QkFBNEI7WUFDaEQsZUFBZSxFQUFFLEtBQUs7WUFDdEIsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7WUFDbkMsWUFBWSxFQUFFLEVBQUU7WUFDaEIsUUFBUSxFQUFFLEtBQUs7WUFDZixZQUFZLEVBQUUsS0FBSztZQUNuQixtQkFBbUIsRUFBQyxTQUFTO1NBQ2hDLENBQUM7UUFDTSxhQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ25CLFVBQUssR0FBVSxFQUFFLENBQUM7UUFHakIsWUFBTyxHQUFHLGdCQUFnQixDQUFDO1FBQzNCLFlBQU8sR0FBVSxFQUFFLENBQUM7UUF5Qm5CLGFBQVEsR0FBc0Is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cnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25DaGFuZ2VzLCBJbnB1dCwgT3V0cHV0LFNpbXBsZUNoYW5nZXMsIEV2ZW50RW1pdHRlciwgQ29udGVudENoaWxkLCBBZnRlckNvbnRlbnRJbml0LCBUZW1wbGF0ZVJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRGF0YVNob3dpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZGF0YS1zaG93aW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDYXB0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jYXB0aW9uL2NhcHRpb24uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduZ3gtZGF0YXRhYmxlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZ3gtZGF0YXRhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL25neC1kYXRhdGFibGUuY29tcG9uZW50LmNzcyddLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgICBwcm92aWRlcnM6IFtEYXRhU2hvd2luZ1NlcnZpY2VdXHJcbiAgICBcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neERhdGF0YWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xyXG4gICAgcHJpdmF0ZSBuZ1Vuc3Vic2NyaWJlOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICAgIHByaXZhdGUgY3VzdG9tT3B0aW9ucyA9IHtcclxuICAgICAgICAnZW1wdHlEYXRhTWVzc2FnZSc6ICdObyBkYXRhIGF2YWlsYWJsZSBpbiB0YWJsZScsXHJcbiAgICAgICAgJ3Jvd0NsaWNrRXZlbnQnOiBmYWxzZSxcclxuICAgICAgICAncm93UGVyUGFnZU1lbnUnOiBbMTAsIDIwLCA1MCwgMTAwXSxcclxuICAgICAgICAncm93UGVyUGFnZSc6IDEwLFxyXG4gICAgICAgICdsb2FkZXInOiBmYWxzZSxcclxuICAgICAgICAnY2hlY2tib3hlcyc6IGZhbHNlLFxyXG4gICAgICAgICdyb3dEZXRhaWxUZW1wbGF0ZSc6dW5kZWZpbmVkXHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBfb3B0aW9uczogYW55ID0ge307XHJcbiAgICBwcml2YXRlIF9kYXRhOiBhbnlbXSA9IFtdO1xyXG5cclxuXHJcbiAgICBASW5wdXQoKSB0YWJsZUlkID0gJ25neERhdGFUYWJsZUlkJztcclxuICAgIEBJbnB1dCgpIGNvbHVtbnM6IGFueVtdID0gW107XHJcbiAgICBASW5wdXQoKSBzZXQgZGF0YShhcnI6YW55W10pIHsgXHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IFtdO1xyXG4gICAgICAgIGFyci5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICAgICAgICAgICdfYXV0b0lkJzogaW5kZXhcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgZ2V0IGRhdGEoKTogYW55W10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBASW5wdXQoKSBzZXQgb3B0aW9ucyhvYmo6YW55KSB7IFxyXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuY3VzdG9tT3B0aW9ucyxcclxuICAgICAgICAgICAgLi4udGhpcy5fb3B0aW9ucyxcclxuICAgICAgICAgICAgLi4ub2JqXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGdldCBvcHRpb25zKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XHJcbiAgICB9XHJcbiAgICBASW5wdXQoKSB0YWJsZUNsYXNzOiBhbnk7XHJcbiAgICBAT3V0cHV0KCkgcm93Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgY2hlY2tib3hDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBDb250ZW50Q2hpbGQoQ2FwdGlvbkNvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIGNhcHRpb25SZWY6IENhcHRpb25Db21wb25lbnRcclxuXHJcbiAgICBzZWFyY2hUZXh0OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgb3JkZXJCeTogeyBvcmRlcjogc3RyaW5nLCBrZXk6IHN0cmluZyB9ID0geyBvcmRlcjogJycsIGtleTogJycgfTtcclxuICAgIGRhdGFTaG93aW5nOiB7IHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBsZW46IG51bWJlciB9ID0geyBzdGFydDogMCwgZW5kOiAwLCBsZW46IDAgfVxyXG4gICAgc3R5bGVQYXJhbXM6IGFueSA9IHsgcGlubmVkU2NvbGxlck1hcmdpbkxlZnQ6IDAsIHBpbm5lZEZsYWc6ZmFsc2UgfTtcclxuXHJcbiAgICBzZWxlY3RlZENoZWNrYm94ZXMgPSBuZXcgU2V0KCk7XHJcbiAgICBzZWxlY3RlZENoZWNrTGlzdDogYW55W10gPSBbXTtcclxuICAgIFxyXG4gICAgb3BlblJvd0RldGFpbHNJZCA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGRhdGFTaG93aW5nU2VydmljZTogRGF0YVNob3dpbmdTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuY29sdW1ucy5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgaXRlbVsnc29ydGluZyddID0gaXRlbS5oYXNPd25Qcm9wZXJ0eSgnc29ydGluZycpID8gaXRlbVsnc29ydGluZyddIDogdHJ1ZTtcclxuICAgICAgICAgICAgaXRlbVsnaGVhZEFsaWduJ10gPSBpdGVtLmhhc093blByb3BlcnR5KCdoZWFkQWxpZ24nKSA/IGl0ZW1bJ2hlYWRBbGlnbiddLnRvTG93ZXJDYXNlKCkgOiAnbGVmdCc7XHJcbiAgICAgICAgICAgIGl0ZW1bJ3NvcnRpbmdPcmRlciddID0gJyc7XHJcblxyXG4gICAgICAgICAgICBpZiAoIChpdGVtLmhhc093blByb3BlcnR5KCdwaW5uZWQnKSAmJiBpdGVtWydwaW5uZWQnXSA9PSB0cnVlKSApIHtcclxuICAgICAgICAgICAgICAgIC8qKiB3b3JraW5nIGZvciBwaW4gdGhlIGNoZWNrYm94IGNvbHVtbiAqL1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdHlsZVBhcmFtc1sncGlubmVkRmxhZyddID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIGlmICggdGhpcy5vcHRpb25zLmNoZWNrYm94ZXMgPT0gdHJ1ZSAmJiB0aGlzLnN0eWxlUGFyYW1zWydwaW5uZWRGbGFnJ10gJiYgaSA9PTApIHsgXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5zdHlsZVBhcmFtcy5waW5uZWRTY29sbGVyTWFyZ2luTGVmdCA9IDMzO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW1bJ3dpZHRoJ10gPSBpdGVtLmhhc093blByb3BlcnR5KCd3aWR0aCcpID8gaXRlbVsnd2lkdGgnXSA6IDEwMDtcclxuICAgICAgICAgICAgICAgIGl0ZW1bJ3Bpbm5lZE1hcmdpbkxlZnQnXSA9IHRoaXMuc3R5bGVQYXJhbXMucGlubmVkU2NvbGxlck1hcmdpbkxlZnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlUGFyYW1zLnBpbm5lZFNjb2xsZXJNYXJnaW5MZWZ0ICs9IHBhcnNlSW50KGl0ZW1bJ3dpZHRoJ10pICsgMjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmRhdGFTaG93aW5nRm4odGhpcy5jdXJyZW50UGFnZSwgdGhpcy5vcHRpb25zLnJvd1BlclBhZ2UsIHRoaXMuZGF0YS5sZW5ndGgpXHJcblxyXG4gICAgICAgIC8qKiBzdWJzY3JpcHRpb24gbGlzdCAqL1xyXG4gICAgICAgIHRoaXMuZGF0YVNob3dpbmdTZXJ2aWNlLmRhdGFTaG93aW5nU3ViamVjdC5zdWJzY3JpYmUoc3ViRGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHN1YkRhdGFbJ2l0ZW1QZXJQYWdlJ10gPSBzdWJEYXRhLmhhc093blByb3BlcnR5KCdpdGVtUGVyUGFnZScpID8gc3ViRGF0YS5pdGVtUGVyUGFnZSA6IHRoaXMub3B0aW9ucy5yb3dQZXJQYWdlO1xyXG4gICAgICAgICAgICBzdWJEYXRhWydjdXJyZW50UGFnZSddID0gc3ViRGF0YS5oYXNPd25Qcm9wZXJ0eSgnY3VycmVudFBhZ2UnKSA/IHN1YkRhdGEuY3VycmVudFBhZ2UgOiB0aGlzLmN1cnJlbnRQYWdlO1xyXG4gICAgICAgICAgICBzdWJEYXRhWydsZW4nXSA9IHN1YkRhdGEuaGFzT3duUHJvcGVydHkoJ2xlbicpID8gc3ViRGF0YS5sZW4gOiB0aGlzLmRhdGFTaG93aW5nLmxlbjtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU2hvd2luZ0ZuKHN1YkRhdGEuY3VycmVudFBhZ2UsIHN1YkRhdGEuaXRlbVBlclBhZ2UsIHN1YkRhdGEubGVuKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuaGVhZGVyUmVmKTtcclxuICAgIH1cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHsgXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjaGFuZ2VzKTtcclxuICAgIH1cclxuICAgIG9uSW5wdXRTZWFyY2goKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZUl0ZW1QZXJQYWdlKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgICAgIHRoaXMuZGF0YVNob3dpbmdTZXJ2aWNlLnNldFNhdGFTaG93aW5nU3ViamVjdCh7ICdjdXJyZW50UGFnZSc6IHRoaXMuY3VycmVudFBhZ2UsICdpdGVtUGVyUGFnZSc6IHRoaXMub3B0aW9ucy5yb3dQZXJQYWdlIH0pO1xyXG4gICAgfVxyXG4gICAgb25QYWdlQ2hhbmdlKGN1cnJlbnRQYWdlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IGN1cnJlbnRQYWdlO1xyXG4gICAgICAgIHRoaXMuZGF0YVNob3dpbmdTZXJ2aWNlLnNldFNhdGFTaG93aW5nU3ViamVjdCh7ICdjdXJyZW50UGFnZSc6IGN1cnJlbnRQYWdlIH0pO1xyXG4gICAgfVxyXG4gICAgb25DbGlja09yZGVyQnkoY29sSXRlbTogYW55LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGNvbEl0ZW0uc29ydGluZyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5tYXAoKGl0ZW0pID0+IHsgaXRlbS5zb3J0aW5nT3JkZXIgPSAnJyB9KTtcclxuICAgICAgICAgICAgdGhpcy5vcmRlckJ5ID0ge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5vcmRlckJ5LFxyXG4gICAgICAgICAgICAgICAgJ29yZGVyJzogdGhpcy5vcmRlckJ5Lm9yZGVyID09ICdhc2MnID8gJ2Rlc2MnIDogJ2FzYycsXHJcbiAgICAgICAgICAgICAgICAna2V5JyA6IGNvbEl0ZW0ua2V5XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1uc1tpbmRleF1bJ3NvcnRpbmdPcmRlciddID0gdGhpcy5vcmRlckJ5Lm9yZGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uUm93Q2xpY2soaXRlbTogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yb3dDbGlja0V2ZW50KVxyXG4gICAgICAgICAgICB0aGlzLnJvd0NsaWNrLmVtaXQoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGVja2JveFNlbGVjdChyb3dPYmo6IGFueSkgeyBcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZENoZWNrYm94ZXMuaGFzKHJvd09iai5fYXV0b0lkKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2hlY2tib3hlcy5kZWxldGUocm93T2JqLl9hdXRvSWQpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2hlY2tMaXN0ID0gdGhpcy5zZWxlY3RlZENoZWNrTGlzdC5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5fYXV0b0lkICE9IHJvd09iai5fYXV0b0lkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7IFxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2hlY2tib3hlcy5hZGQocm93T2JqLl9hdXRvSWQpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2hlY2tMaXN0LnB1c2gocm93T2JqKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGVja2JveENsaWNrLmVtaXQodGhpcy5zZWxlY3RlZENoZWNrTGlzdCk7XHJcbiAgICB9XHJcbiAgICBvbkNoZWNrYm94U2VsZWN0QWxsKGNoZWNrZWQpIHsgXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENoZWNrYm94ZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENoZWNrTGlzdCA9IFtdO1xyXG4gICAgICAgIGlmIChjaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGVja0xpc3QgPSB0aGlzLmRhdGEuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENoZWNrYm94ZXMuYWRkKGl0ZW0uX2F1dG9JZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hlY2tib3hDbGljay5lbWl0KHRoaXMuc2VsZWN0ZWRDaGVja0xpc3QpO1xyXG4gICAgfVxyXG4gICAgb25DbGlja1Jvd0RldHRhaWxBcnJvd09wZW4ocm93T2JqOmFueSkgeyBcclxuICAgICAgICBpZiAodGhpcy5vcGVuUm93RGV0YWlsc0lkLmhhcyhyb3dPYmouX2F1dG9JZCkpIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuUm93RGV0YWlsc0lkLmRlbGV0ZShyb3dPYmouX2F1dG9JZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgeyBcclxuICAgICAgICAgICAgdGhpcy5vcGVuUm93RGV0YWlsc0lkLmFkZChyb3dPYmouX2F1dG9JZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25DbGlja1Jvd0RldHRhaWxBbGxBcnJvd09wZW4oKSB7IFxyXG4gICAgICAgIGlmICh0aGlzLm9wZW5Sb3dEZXRhaWxzSWQuc2l6ZSAhPSB0aGlzLmRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlblJvd0RldGFpbHNJZCA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlblJvd0RldGFpbHNJZC5hZGQoaXRlbS5fYXV0b0lkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7IFxyXG4gICAgICAgICAgICB0aGlzLm9wZW5Sb3dEZXRhaWxzSWQgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlkZW50aWZ5KGluZGV4LCBpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkYXRhU2hvd2luZ0ZuKGN1cnJlbnRQYWdlLCBpdGVtUGVyUGFnZSwgbGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU2hvd2luZy5zdGFydCA9IGxlbmd0aCA9PSAwID8gMCA6ICgoY3VycmVudFBhZ2UgLSAxKSAqIGl0ZW1QZXJQYWdlKSArIDE7XHJcbiAgICAgICAgdGhpcy5kYXRhU2hvd2luZy5lbmQgPSBjdXJyZW50UGFnZSAqIGl0ZW1QZXJQYWdlID4gbGVuZ3RoID8gbGVuZ3RoIDogY3VycmVudFBhZ2UgKiBpdGVtUGVyUGFnZTtcclxuICAgICAgICB0aGlzLmRhdGFTaG93aW5nLmxlbiA9IGxlbmd0aDtcclxuICAgIH1cclxufVxyXG4iXX0=