import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-pin-tab',
  templateUrl: './pin-tab.component.html'
})

export class PinTabComponent implements OnInit  {
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
            { key: 'company', title: 'Company', width: 200, noWrap: { head: true, body: true } },
            { key: 'zip', title: 'ZIP', sorting: false },
            { key: 'date', title: 'Date', sorting: false },
            { key: 'zip', title: 'ZIP', sorting: false }
        ]
        this.setData();
       
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
