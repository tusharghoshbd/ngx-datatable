/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DataShowingService } from '../services/data-showing.service';
export class SearchPipe {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdHVzaGFyZ2hvc2hiZC9uZ3gtZGF0YXRhYmxlLyIsInNvdXJjZXMiOlsibGliL3BpcGUvc2VhcmNoLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBTXRFLE1BQU0sT0FBTyxVQUFVOzs7O0lBQ25CLFlBQW9CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQUksQ0FBQzs7Ozs7O0lBRS9ELFNBQVMsQ0FBQyxLQUFZLEVBQUUsVUFBa0I7UUFDdEMsSUFBSSxPQUFPLEtBQUssS0FBSyxXQUFXLEVBQUU7WUFDOUIsT0FBTztTQUNWO1FBQ0QsSUFBSSxPQUFPLFVBQVUsS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLFVBQVUsS0FBSyxFQUFFLEVBQUU7WUFDaEcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLEVBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQ3BFLE9BQU8sS0FBSyxDQUFDO1NBQ2hCOztjQUNLLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTTs7OztRQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7O2tCQUN2QixTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BELE9BQVEsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsRixDQUFDLEVBQUM7UUFDRixJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsRUFBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7UUFDakUsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDOzs7WUFyQkosSUFBSSxTQUFDO2dCQUNGLElBQUksRUFBRSxRQUFRO2FBQ2pCOzs7O1lBSlEsa0JBQWtCOzs7Ozs7O0lBT1gsd0NBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRGF0YVNob3dpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZGF0YS1zaG93aW5nLnNlcnZpY2UnO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ3NlYXJjaCcsXHJcbn0pXHJcbiAgXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGFTaG93aW5nU2VydmljZTogRGF0YVNob3dpbmdTZXJ2aWNlKSB7IH1cclxuICAgIFxyXG4gICAgdHJhbnNmb3JtKGFycmF5OiBhbnlbXSwgc2VhcmNoVGV4dDogc3RyaW5nKTogYW55IHtcclxuICAgICAgICBpZiAodHlwZW9mIGFycmF5ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2Ygc2VhcmNoVGV4dCA9PT0gJ3VuZGVmaW5lZCcgfHwgT2JqZWN0LmtleXMoc2VhcmNoVGV4dCkubGVuZ3RoID09PSAwIHx8IHNlYXJjaFRleHQgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNob3dpbmdTZXJ2aWNlLnNldFNhdGFTaG93aW5nU3ViamVjdCh7bGVuOiBhcnJheS5sZW5ndGggfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJheTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYXJyID0gYXJyYXkuZmlsdGVyKChyb3cpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgcm93RGV0YWlsID0gSlNPTi5zdHJpbmdpZnkoT2JqZWN0LnZhbHVlcyhyb3cpKTtcclxuICAgICAgICAgICAgcmV0dXJuICByb3dEZXRhaWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFRleHQudHJpbSgpLnRvTG93ZXJDYXNlKCkpID4gLTE7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kYXRhU2hvd2luZ1NlcnZpY2Uuc2V0U2F0YVNob3dpbmdTdWJqZWN0KHtsZW46IGFyci5sZW5ndGh9KTtcclxuICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgfVxyXG59Il19