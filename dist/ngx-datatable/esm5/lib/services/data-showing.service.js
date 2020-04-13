/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var DataShowingService = /** @class */ (function () {
    function DataShowingService() {
        this.dataShowingSubject = new Subject();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    DataShowingService.prototype.setSataShowingSubject = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.dataShowingSubject.next(data);
    };
    DataShowingService.decorators = [
        { type: Injectable }
    ];
    return DataShowingService;
}());
export { DataShowingService };
if (false) {
    /** @type {?} */
    DataShowingService.prototype.dataShowingSubject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zaG93aW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdHVzaGFyZ2hvc2hiZC9uZ3gtZGF0YXRhYmxlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2RhdGEtc2hvd2luZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHL0I7SUFBQTtRQUVJLHVCQUFrQixHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7SUFRNUMsQ0FBQzs7Ozs7SUFMRyxrREFBcUI7Ozs7SUFBckIsVUFBc0IsSUFBSTtRQUN0QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7O2dCQVBKLFVBQVU7O0lBVVgseUJBQUM7Q0FBQSxBQVZELElBVUM7U0FUWSxrQkFBa0I7OztJQUMzQixnREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuIFxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGF0YVNob3dpbmdTZXJ2aWNlIHtcclxuICAgIGRhdGFTaG93aW5nU3ViamVjdCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuXHJcblxyXG4gICAgc2V0U2F0YVNob3dpbmdTdWJqZWN0KGRhdGEpIHsgXHJcbiAgICAgICAgdGhpcy5kYXRhU2hvd2luZ1N1YmplY3QubmV4dChkYXRhKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==