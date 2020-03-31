# Ngx Data Table

**Ngx Data Table** is an angular library for presenting data in table. This library is easy to integrate in your angular component. This library supports search, pagination features, cell template, sorting, alignment, warping. You can also customize this library as your requirements.

Building this library is inspired by jQuery Datatable, ngx-easy-table and @swimlane/ngx-datatable.


## Demo
![](https://media2.giphy.com/media/U6eXMuh4OSAiuSsmiF/200.gif)

[Demo in stackblitz](https://stackblitz.com/edit/ngx-datatable-angular?file=src/app/app.component.ts)

## Installation

As a prerequisite, you need [boostrap](https://getbootstrap.com/) library.

```angular
npm i ngx-pagination
npm i @tusharghoshbd/ngx-datatable
```



## Usage

#### Html file
```angular
<ngx-datatable 
   tableClass = "table table-striped table-bordered table-hover"
   [data]="data"
   [options]="options" 
   [columns]="columns"
 >
 </ngx-datatable >
```

#### Ts file
```angular
options:any={};
data:any[] = [];
columns: any = {};

```

#### Module file
```ts
import { NgxDatatableModule } from '@tusharghoshbd/ngx-datatable';

@NgModule({
   imports:[ ... NgxDatatableModule ]
})

```

## Features
* Filtering
* Pagination
* Sorting
* Pinned column
* Cell template customization
* Beautiful Table caption
* Beautify the Table header
* Cell text warping features
* Cell text alignment features
* Capable to modify the row per page
* Row click event
* Auto scrolling
* Easy to integrate and less CSS work
* Responsive

**All features examples are available in demo.** [Demo in stackblitz](https://stackblitz.com/edit/ngx-datatable-angular?file=src/app/app.component.ts)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.



## License
[MIT](https://choosealicense.com/licenses/mit/)