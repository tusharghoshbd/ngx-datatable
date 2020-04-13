/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DataShowingService } from '../services/data-showing.service';
var SearchPipe = /** @class */ (function () {
    function SearchPipe(dataShowingService) {
        this.dataShowingService = dataShowingService;
    }
    /**
     * @param {?} array
     * @param {?} searchText
     * @return {?}
     */
    SearchPipe.prototype.transform = /**
     * @param {?} array
     * @param {?} searchText
     * @return {?}
     */
    function (array, searchText) {
        if (typeof array === 'undefined') {
            return;
        }
        if (typeof searchText === 'undefined' || Object.keys(searchText).length === 0 || searchText === '') {
            this.dataShowingService.setSataShowingSubject({ len: array.length });
            return array;
        }
        /** @type {?} */
        var arr = array.filter((/**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            /** @type {?} */
            var rowDetail = JSON.stringify(Object.values(row));
            return rowDetail.toLowerCase().indexOf(searchText.trim().toLowerCase()) > -1;
        }));
        this.dataShowingService.setSataShowingSubject({ len: arr.length });
        return arr;
    };
    SearchPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'search',
                },] }
    ];
    /** @nocollapse */
    SearchPipe.ctorParameters = function () { return [
        { type: DataShowingService }
    ]; };
    return SearchPipe;
}());
export { SearchPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchPipe.prototype.dataShowingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdHVzaGFyZ2hvc2hiZC9uZ3gtZGF0YXRhYmxlLyIsInNvdXJjZXMiOlsibGliL3BpcGUvc2VhcmNoLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXRFO0lBS0ksb0JBQW9CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQUksQ0FBQzs7Ozs7O0lBRS9ELDhCQUFTOzs7OztJQUFULFVBQVUsS0FBWSxFQUFFLFVBQWtCO1FBQ3RDLElBQUksT0FBTyxLQUFLLEtBQUssV0FBVyxFQUFFO1lBQzlCLE9BQU87U0FDVjtRQUNELElBQUksT0FBTyxVQUFVLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxVQUFVLEtBQUssRUFBRSxFQUFFO1lBQ2hHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUNwRSxPQUFPLEtBQUssQ0FBQztTQUNoQjs7WUFDSyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLEdBQUc7O2dCQUNuQixTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BELE9BQVEsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsRixDQUFDLEVBQUM7UUFDRixJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsRUFBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7UUFDakUsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDOztnQkFyQkosSUFBSSxTQUFDO29CQUNGLElBQUksRUFBRSxRQUFRO2lCQUNqQjs7OztnQkFKUSxrQkFBa0I7O0lBd0IzQixpQkFBQztDQUFBLEFBdEJELElBc0JDO1NBbEJZLFVBQVU7Ozs7OztJQUNQLHdDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IERhdGFTaG93aW5nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2RhdGEtc2hvd2luZy5zZXJ2aWNlJztcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdzZWFyY2gnLFxyXG59KVxyXG4gIFxyXG5leHBvcnQgY2xhc3MgU2VhcmNoUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhU2hvd2luZ1NlcnZpY2U6IERhdGFTaG93aW5nU2VydmljZSkgeyB9XHJcbiAgICBcclxuICAgIHRyYW5zZm9ybShhcnJheTogYW55W10sIHNlYXJjaFRleHQ6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhcnJheSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHNlYXJjaFRleHQgPT09ICd1bmRlZmluZWQnIHx8IE9iamVjdC5rZXlzKHNlYXJjaFRleHQpLmxlbmd0aCA9PT0gMCB8fCBzZWFyY2hUZXh0ID09PSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTaG93aW5nU2VydmljZS5zZXRTYXRhU2hvd2luZ1N1YmplY3Qoe2xlbjogYXJyYXkubGVuZ3RoIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFyciA9IGFycmF5LmZpbHRlcigocm93KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvd0RldGFpbCA9IEpTT04uc3RyaW5naWZ5KE9iamVjdC52YWx1ZXMocm93KSk7XHJcbiAgICAgICAgICAgIHJldHVybiAgcm93RGV0YWlsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hUZXh0LnRyaW0oKS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGF0YVNob3dpbmdTZXJ2aWNlLnNldFNhdGFTaG93aW5nU3ViamVjdCh7bGVuOiBhcnIubGVuZ3RofSk7XHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxufSJdfQ==