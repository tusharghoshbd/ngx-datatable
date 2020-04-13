/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    /**
     * @param {?} array
     * @param {?} filter
     * @return {?}
     */
    SortPipe.prototype.transform = /**
     * @param {?} array
     * @param {?} filter
     * @return {?}
     */
    function (array, filter) {
        var _this = this;
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
            function (a, b) { return _this.compare(a, b, filter.key); }));
        }
        else {
            return array.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return _this.compare(b, a, filter.key); }));
        }
    };
    /**
     * @private
     * @param {?} a
     * @param {?} b
     * @param {?} key
     * @return {?}
     */
    SortPipe.prototype.compare = /**
     * @private
     * @param {?} a
     * @param {?} b
     * @param {?} key
     * @return {?}
     */
    function (a, b, key) {
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
    };
    /**
     * @private
     * @param {?} aV
     * @param {?} bV
     * @return {?}
     */
    SortPipe.prototype.isNaN = /**
     * @private
     * @param {?} aV
     * @param {?} bV
     * @return {?}
     */
    function (aV, bV) {
        return (isNaN(parseFloat(aV)) || !isFinite(aV)) || (isNaN(parseFloat(bV)) || !isFinite(bV));
    };
    SortPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'sort',
                    pure: true //default pure = true
                },] }
    ];
    return SortPipe;
}());
export { SortPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHR1c2hhcmdob3NoYmQvbmd4LWRhdGF0YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9waXBlL3NvcnQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFcEQ7SUFBQTtJQTBDQSxDQUFDOzs7Ozs7SUFuQ0csNEJBQVM7Ozs7O0lBQVQsVUFBVSxLQUFZLEVBQUUsTUFBc0M7UUFBOUQsaUJBZUM7UUFkRyxxREFBcUQ7UUFDckQsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQ2xDLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUNyQixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUU7WUFDeEIsT0FBTyxLQUFLLENBQUMsSUFBSTs7Ozs7WUFBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUE5QixDQUE4QixFQUFDLENBQUM7U0FDL0Q7YUFBTTtZQUNILE9BQU8sS0FBSyxDQUFDLElBQUk7Ozs7O1lBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBOUIsQ0FBOEIsRUFBQyxDQUFDO1NBQy9EO0lBRUwsQ0FBQzs7Ozs7Ozs7SUFFTywwQkFBTzs7Ozs7OztJQUFmLFVBQWdCLENBQU0sRUFBRSxDQUFNLEVBQUUsR0FBVztRQUN2Qyw2Q0FBNkM7UUFDN0MsZ0NBQWdDO1FBQ2hDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDNUIsT0FBTyxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNILElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDM0MsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNYO1lBQ0QsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUMzQyxPQUFPLENBQUMsQ0FBQzthQUNWO1NBQ0o7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7Ozs7Ozs7SUFDUSx3QkFBSzs7Ozs7O0lBQWQsVUFBZSxFQUFPLEVBQUUsRUFBTztRQUMzQixPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDOztnQkF6Q0osSUFBSSxTQUFDO29CQUNGLElBQUksRUFBRSxNQUFNO29CQUNaLElBQUksRUFBRSxJQUFJLENBQUMscUJBQXFCO2lCQUNuQzs7SUF1Q0QsZUFBQztDQUFBLEFBMUNELElBMENDO1NBckNZLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnc29ydCcsXHJcbiAgICBwdXJlOiB0cnVlIC8vZGVmYXVsdCBwdXJlID0gdHJ1ZVxyXG59KVxyXG4gIFxyXG5leHBvcnQgY2xhc3MgU29ydFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICB0cmFuc2Zvcm0oYXJyYXk6IGFueVtdLCBmaWx0ZXI6IHsgb3JkZXI6IHN0cmluZywga2V5OiBzdHJpbmcgfSk6IGFueSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzb3J0IHBpcGVcIiArIEpTT04uc3RyaW5naWZ5KGZpbHRlcikpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFycmF5KTtcclxuICAgICAgICBpZiAoIWZpbHRlci5rZXkgfHwgZmlsdGVyLmtleSA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmlsdGVyLm9yZGVyID09PSAnJykge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaWx0ZXIub3JkZXIgPT09ICdhc2MnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJheS5zb3J0KChhLCBiKSA9PiB0aGlzLmNvbXBhcmUoYSwgYiwgZmlsdGVyLmtleSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJheS5zb3J0KChhLCBiKSA9PiB0aGlzLmNvbXBhcmUoYiwgYSwgZmlsdGVyLmtleSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21wYXJlKGE6IGFueSwgYjogYW55LCBrZXk6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgLy9yZXR1cm4gKCcnICsgYVtrZXldKS5sb2NhbGVDb21wYXJlKGJba2V5XSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmlzTmFOKGEsIGIpKTtcclxuICAgICAgICBpZiAodGhpcy5pc05hTihhW2tleV0sIGJba2V5XSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICgnJythW2tleV0pLmxvY2FsZUNvbXBhcmUoYltrZXldKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAocGFyc2VGbG9hdChhW2tleV0pIDwgcGFyc2VGbG9hdChiW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwYXJzZUZsb2F0KGFba2V5XSkgPiBwYXJzZUZsb2F0KGJba2V5XSkpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgIGlzTmFOKGFWOiBhbnksIGJWOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKGlzTmFOKHBhcnNlRmxvYXQoYVYpKSB8fCAhaXNGaW5pdGUoYVYpKSB8fCAoaXNOYU4ocGFyc2VGbG9hdChiVikpIHx8ICFpc0Zpbml0ZShiVikpO1xyXG4gICAgfVxyXG59Il19