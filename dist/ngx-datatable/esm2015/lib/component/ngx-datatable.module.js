/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDatatableComponent } from './ngx-datatable.component';
import { CaptionComponent } from './caption/caption.component';
import { SearchPipe } from '../pipe/search.pipe';
import { SortPipe } from '../pipe/sort.pipe';
export class NgxDatatableModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdHVzaGFyZ2hvc2hiZC9uZ3gtZGF0YXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9uZ3gtZGF0YXRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBSS9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFjN0MsTUFBTSxPQUFPLGtCQUFrQjs7O1lBVjlCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixDQUFDO2dCQUM3RSxPQUFPLEVBQUU7b0JBQ0gsV0FBVztvQkFDWCxZQUFZO29CQUNaLG1CQUFtQjtpQkFDdEI7Z0JBQ0QsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsT0FBTyxFQUFFLENBQUMscUJBQXFCLEVBQUUsZ0JBQWdCLENBQUM7YUFDckQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgTmd4UGFnaW5hdGlvbk1vZHVsZSB9IGZyb20gJ25neC1wYWdpbmF0aW9uJztcclxuXHJcbmltcG9ydCB7IE5neERhdGF0YWJsZUNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWRhdGF0YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYXB0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jYXB0aW9uL2NhcHRpb24uY29tcG9uZW50JztcclxuXHJcblxyXG5cclxuaW1wb3J0IHsgU2VhcmNoUGlwZSB9IGZyb20gJy4uL3BpcGUvc2VhcmNoLnBpcGUnO1xyXG5pbXBvcnQgeyBTb3J0UGlwZSB9IGZyb20gJy4uL3BpcGUvc29ydC5waXBlJztcclxuXHJcbmltcG9ydCB7IERhdGFTaG93aW5nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2RhdGEtc2hvd2luZy5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbTmd4RGF0YXRhYmxlQ29tcG9uZW50LCBTZWFyY2hQaXBlLCBTb3J0UGlwZSwgQ2FwdGlvbkNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBOZ3hQYWdpbmF0aW9uTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXSxcclxuICAgIGV4cG9ydHM6IFtOZ3hEYXRhdGFibGVDb21wb25lbnQsIENhcHRpb25Db21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hEYXRhdGFibGVNb2R1bGUgeyB9XHJcbiJdfQ==