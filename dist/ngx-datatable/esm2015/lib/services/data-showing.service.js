/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export class DataShowingService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zaG93aW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdHVzaGFyZ2hvc2hiZC9uZ3gtZGF0YXRhYmxlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2RhdGEtc2hvd2luZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJL0IsTUFBTSxPQUFPLGtCQUFrQjtJQUQvQjtRQUVJLHVCQUFrQixHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7SUFRNUMsQ0FBQzs7Ozs7SUFMRyxxQkFBcUIsQ0FBQyxJQUFJO1FBQ3RCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7O1lBUEosVUFBVTs7OztJQUVQLGdEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG4gXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEYXRhU2hvd2luZ1NlcnZpY2Uge1xyXG4gICAgZGF0YVNob3dpbmdTdWJqZWN0ID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG5cclxuXHJcbiAgICBzZXRTYXRhU2hvd2luZ1N1YmplY3QoZGF0YSkgeyBcclxuICAgICAgICB0aGlzLmRhdGFTaG93aW5nU3ViamVjdC5uZXh0KGRhdGEpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19