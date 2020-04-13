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
var NgxDatatableModule = /** @class */ (function () {
    function NgxDatatableModule() {
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
    return NgxDatatableModule;
}());
export { NgxDatatableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdHVzaGFyZ2hvc2hiZC9uZ3gtZGF0YXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9uZ3gtZGF0YXRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBSS9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFJN0M7SUFBQTtJQVVrQyxDQUFDOztnQkFWbEMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHFCQUFxQixFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLENBQUM7b0JBQzdFLE9BQU8sRUFBRTt3QkFDSCxXQUFXO3dCQUNYLFlBQVk7d0JBQ1osbUJBQW1CO3FCQUN0QjtvQkFDRCxTQUFTLEVBQUUsRUFBRTtvQkFDYixPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxnQkFBZ0IsQ0FBQztpQkFDckQ7O0lBQ2lDLHlCQUFDO0NBQUEsQUFWbkMsSUFVbUM7U0FBdEIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IE5neFBhZ2luYXRpb25Nb2R1bGUgfSBmcm9tICduZ3gtcGFnaW5hdGlvbic7XHJcblxyXG5pbXBvcnQgeyBOZ3hEYXRhdGFibGVDb21wb25lbnQgfSBmcm9tICcuL25neC1kYXRhdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2FwdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY2FwdGlvbi9jYXB0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5cclxuXHJcbmltcG9ydCB7IFNlYXJjaFBpcGUgfSBmcm9tICcuLi9waXBlL3NlYXJjaC5waXBlJztcclxuaW1wb3J0IHsgU29ydFBpcGUgfSBmcm9tICcuLi9waXBlL3NvcnQucGlwZSc7XHJcblxyXG5pbXBvcnQgeyBEYXRhU2hvd2luZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kYXRhLXNob3dpbmcuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW05neERhdGF0YWJsZUNvbXBvbmVudCwgU2VhcmNoUGlwZSwgU29ydFBpcGUsIENhcHRpb25Db21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgTmd4UGFnaW5hdGlvbk1vZHVsZVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW10sXHJcbiAgICBleHBvcnRzOiBbTmd4RGF0YXRhYmxlQ29tcG9uZW50LCBDYXB0aW9uQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RGF0YXRhYmxlTW9kdWxlIHsgfVxyXG4iXX0=