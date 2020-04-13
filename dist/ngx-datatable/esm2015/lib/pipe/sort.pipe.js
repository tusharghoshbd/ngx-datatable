/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class SortPipe {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHR1c2hhcmdob3NoYmQvbmd4LWRhdGF0YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9waXBlL3NvcnQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFPcEQsTUFBTSxPQUFPLFFBQVE7Ozs7OztJQUVqQixTQUFTLENBQUMsS0FBWSxFQUFFLE1BQXNDO1FBQzFELHFEQUFxRDtRQUNyRCxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFDbEMsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssRUFBRSxFQUFFO1lBQ3JCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBRTtZQUN4QixPQUFPLEtBQUssQ0FBQyxJQUFJOzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO1NBQy9EO2FBQU07WUFDSCxPQUFPLEtBQUssQ0FBQyxJQUFJOzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO1NBQy9EO0lBRUwsQ0FBQzs7Ozs7Ozs7SUFFTyxPQUFPLENBQUMsQ0FBTSxFQUFFLENBQU0sRUFBRSxHQUFXO1FBQ3ZDLDZDQUE2QztRQUM3QyxnQ0FBZ0M7UUFDaEMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUM1QixPQUFPLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM1QzthQUFNO1lBQ0gsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUMzQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ1g7WUFDRCxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQzNDLE9BQU8sQ0FBQyxDQUFDO2FBQ1Y7U0FDSjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7OztJQUNRLEtBQUssQ0FBQyxFQUFPLEVBQUUsRUFBTztRQUMzQixPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDOzs7WUF6Q0osSUFBSSxTQUFDO2dCQUNGLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxJQUFJLENBQUMscUJBQXFCO2FBQ25DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ3NvcnQnLFxyXG4gICAgcHVyZTogdHJ1ZSAvL2RlZmF1bHQgcHVyZSA9IHRydWVcclxufSlcclxuICBcclxuZXhwb3J0IGNsYXNzIFNvcnRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgdHJhbnNmb3JtKGFycmF5OiBhbnlbXSwgZmlsdGVyOiB7IG9yZGVyOiBzdHJpbmcsIGtleTogc3RyaW5nIH0pOiBhbnkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic29ydCBwaXBlXCIgKyBKU09OLnN0cmluZ2lmeShmaWx0ZXIpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhcnJheSk7XHJcbiAgICAgICAgaWYgKCFmaWx0ZXIua2V5IHx8IGZpbHRlci5rZXkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJheTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpbHRlci5vcmRlciA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmlsdGVyLm9yZGVyID09PSAnYXNjJykge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXkuc29ydCgoYSwgYikgPT4gdGhpcy5jb21wYXJlKGEsIGIsIGZpbHRlci5rZXkpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXkuc29ydCgoYSwgYikgPT4gdGhpcy5jb21wYXJlKGIsIGEsIGZpbHRlci5rZXkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tcGFyZShhOiBhbnksIGI6IGFueSwga2V5OiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIC8vcmV0dXJuICgnJyArIGFba2V5XSkubG9jYWxlQ29tcGFyZShiW2tleV0pO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5pc05hTihhLCBiKSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNOYU4oYVtrZXldLCBiW2tleV0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoJycrYVtrZXldKS5sb2NhbGVDb21wYXJlKGJba2V5XSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHBhcnNlRmxvYXQoYVtrZXldKSA8IHBhcnNlRmxvYXQoYltrZXldKSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGFyc2VGbG9hdChhW2tleV0pID4gcGFyc2VGbG9hdChiW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlICBpc05hTihhVjogYW55LCBiVjogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChpc05hTihwYXJzZUZsb2F0KGFWKSkgfHwgIWlzRmluaXRlKGFWKSkgfHwgKGlzTmFOKHBhcnNlRmxvYXQoYlYpKSB8fCAhaXNGaW5pdGUoYlYpKTtcclxuICAgIH1cclxufSJdfQ==