import { PipeTransform } from '@angular/core';
export declare class SortPipe implements PipeTransform {
    transform(array: any[], filter: {
        order: string;
        key: string;
    }): any;
    private compare;
    private isNaN;
}
