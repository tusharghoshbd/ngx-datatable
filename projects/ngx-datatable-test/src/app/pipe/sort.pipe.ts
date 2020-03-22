import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort',
    pure: false
})
  
export class SortPipe implements PipeTransform {

    transform(array: any[], filter: { order: string, key: string }): any {
        //console.log("sort pipe"+ JSON.stringify( filter));
        if (!filter.key || filter.key === '') {
            return array;
        }
        if (filter.order === '') {
            return array;
        }
        if (filter.order === 'asc') {
            return array.sort((a, b) => this.compare(a, b, filter.key));
        } else {
            return array.sort((a, b) => this.compare(b, a, filter.key));
        }
    }

    private compare(a: any, b: any, key: string): number {
        return ('' + a[key]).localeCompare(b[key]);
    }
}