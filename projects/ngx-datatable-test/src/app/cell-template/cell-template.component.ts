import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell-template',
  templateUrl: './cell-template.component.html'
})

export class CellTemplateComponent implements OnInit  {
    @ViewChild('actionTpl', { static: true }) actionTpl: TemplateRef<any>;
    options = {}
    data = [];
    columns: any = {};
    columnsWithFeatures:any

    ngOnInit(): void {
      
        this.columns = [
            { key: 'id', title: "ID",  width: 50, sorting: true, pinned: true },
            { key: 'name', title: 'Name', width: 100, pinned: true },
            { key: 'phone', title: 'Phone', align: { head: 'center' }, width: 100, sorting: true },
            { key: 'company', title: 'Company', width: 300, sorting: true, align: { head: 'left', body: 'right' }, noWrap: { head: true, body: true } },
            { key: 'date', title: 'Date', sorting: false, pinned: false },
            { key: 'date', title: 'Date' },
            { key: 'phone', title: 'Phone' ,width: 100},
            { key: 'zip', title: 'Action', sorting: false, width: 80, cellTemplate: this.actionTpl, noWrap: { head: true, body: true } }
        ]
        this.setData();
       
    }


    onClickBtn() {
        alert("Hi Add Button !!!!!");
    }
    remove(rowInded) {
        alert("Row Index :- "+rowInded);
    }
    edit(row){
        alert(JSON.stringify(row));
    }
   

    private setData(){
            this.data = [
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "ZEnim Commodo Limited Enim Commodo Limited Enim Commodo LimitedEnim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "ZOdio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "123",
                    "name": "qwBrendan",
                    "phone": "1-724-406-2487",
                    "company": "YEnim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "rarren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "dssendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "ZEnim Commodo Limited Enim Commodo Limited Enim Commodo LimitedEnim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "ZOdio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "123",
                    "name": "qwBrendan",
                    "phone": "1-724-406-2487",
                    "company": "YEnim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "rarren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "dssendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "ZEnim Commodo Limited Enim Commodo Limited Enim Commodo LimitedEnim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "ZOdio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "123",
                    "name": "qwBrendan",
                    "phone": "1-724-406-2487",
                    "company": "YEnim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "rarren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "dssendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "Enim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "Odio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                },
                {
                    "id": "1",
                    "name": "Brendan",
                    "phone": "1-724-406-2487",
                    "company": "ZEnim Commodo Limited Enim Commodo Limited Enim Commodo LimitedEnim Commodo Limited",
                    "zip": "98611",
                    "city": "Norman",
                    "date": "02/13/14",
                    "country": "Bangladesh"
                },
                {
                    "id": "2",
                    "name": "Warren",
                    "phone": "1-412-485-9725",
                    "company": "ZOdio Etiam Institute",
                    "zip": "10312",
                    "city": "Sautin",
                    "date": "01/01/13",
                    "country": "India"
                }
            ]
    }
}
