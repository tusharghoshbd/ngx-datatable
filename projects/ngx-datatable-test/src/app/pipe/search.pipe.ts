import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search',
})
  
export class SearchPipe implements PipeTransform {
    transform(array: any[], searchText: string): any {
        if (typeof array === 'undefined') {
            return;
        }
        if (typeof searchText === 'undefined' || Object.keys(searchText).length === 0 || searchText === '') {
            return array;
        }
        const arr = array.filter((row) => {
            const rowDetail = JSON.stringify(Object.values(row));
            return  rowDetail.toLowerCase().indexOf(searchText.trim().toLowerCase()) > -1;
        });
        return arr;
    }
}