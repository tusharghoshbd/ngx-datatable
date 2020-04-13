import { PipeTransform } from '@angular/core';
import { DataShowingService } from '../services/data-showing.service';
export declare class SearchPipe implements PipeTransform {
    private dataShowingService;
    constructor(dataShowingService: DataShowingService);
    transform(array: any[], searchText: string): any;
}
