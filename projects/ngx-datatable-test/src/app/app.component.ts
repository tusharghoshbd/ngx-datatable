import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'ngx-datatable-test';
    options = {
        rowClickEvent: true
    }
    data = [
        {
            "id": "1",
            "name": "Brendan",
            "phone": "1-724-406-2487",
            "company": "ZEnim Commodo Limited",
            "zip": "98611",
            "city": "Norman",
            "date": "02/13/14",
            "country":"Bangladesh"
        },
        {
            "id": "2",
            "name": "Warren",
            "phone": "1-412-485-9725",
            "company": "ZOdio Etiam Institute",
            "zip": "10312",
            "city": "Sautin",
            "date": "01/01/13",
            "country":"India"
        },
        {
            "id": "1",
            "name": "qwBrendan",
            "phone": "1-724-406-2487",
            "company": "YEnim Commodo Limited",
            "zip": "98611",
            "city": "Norman",
            "date": "02/13/14",
            "country":"Bangladesh"
        },
        {
            "id": "2",
            "name": "rarren",
            "phone": "1-412-485-9725",
            "company": "Odio Etiam Institute",
            "zip": "10312",
            "city": "Sautin",
            "date": "01/01/13",
            "country":"India"
        },
        {
            "id": "1",
            "name": "dssendan",
            "phone": "1-724-406-2487",
            "company": "Enim Commodo Limited",
            "zip": "98611",
            "city": "Norman",
            "date": "02/13/14",
            "country":"Bangladesh"
        },
        {
            "id": "2",
            "name": "Warren",
            "phone": "1-412-485-9725",
            "company": "Odio Etiam Institute",
            "zip": "10312",
            "city": "Sautin",
            "date": "01/01/13",
            "country":"India"
        },
        {
            "id": "1",
            "name": "Brendan",
            "phone": "1-724-406-2487",
            "company": "Enim Commodo Limited",
            "zip": "98611",
            "city": "Norman",
            "date": "02/13/14",
            "country":"Bangladesh"
        },
        {
            "id": "2",
            "name": "Warren",
            "phone": "1-412-485-9725",
            "company": "Odio Etiam Institute",
            "zip": "10312",
            "city": "Sautin",
            "date": "01/01/13",
            "country":"India"
        },
        {
            "id": "1",
            "name": "Brendan",
            "phone": "1-724-406-2487",
            "company": "Enim Commodo Limited",
            "zip": "98611",
            "city": "Norman",
            "date": "02/13/14",
            "country":"Bangladesh"
        },
        {
            "id": "2",
            "name": "Warren",
            "phone": "1-412-485-9725",
            "company": "Odio Etiam Institute",
            "zip": "10312",
            "city": "Sautin",
            "date": "01/01/13",
            "country":"India"
        },
        {
            "id": "1",
            "name": "Brendan",
            "phone": "1-724-406-2487",
            "company": "Enim Commodo Limited",
            "zip": "98611",
            "city": "Norman",
            "date": "02/13/14",
            "country":"Bangladesh"
        },
        {
            "id": "2",
            "name": "Warren",
            "phone": "1-412-485-9725",
            "company": "Odio Etiam Institute",
            "zip": "10312",
            "city": "Sautin",
            "date": "01/01/13",
            "country":"India"
        },
        {
            "id": "1",
            "name": "Brendan",
            "phone": "1-724-406-2487",
            "company": "Enim Commodo Limited",
            "zip": "98611",
            "city": "Norman",
            "date": "02/13/14",
            "country":"Bangladesh"
        },
        {
            "id": "2",
            "name": "Warren",
            "phone": "1-412-485-9725",
            "company": "Odio Etiam Institute",
            "zip": "10312",
            "city": "Sautin",
            "date": "01/01/13",
            "country":"India"
        },
        {
            "id": "1",
            "name": "Brendan",
            "phone": "1-724-406-2487",
            "company": "Enim Commodo Limited",
            "zip": "98611",
            "city": "Norman",
            "date": "02/13/14",
            "country":"Bangladesh"
        },
        {
            "id": "2",
            "name": "Warren",
            "phone": "1-412-485-9725",
            "company": "Odio Etiam Institute",
            "zip": "10312",
            "city": "Sautin",
            "date": "01/01/13",
            "country":"India"
        },
        {
            "id": "1",
            "name": "Brendan",
            "phone": "1-724-406-2487",
            "company": "Enim Commodo Limited",
            "zip": "98611",
            "city": "Norman",
            "date": "02/13/14",
            "country":"Bangladesh"
        },
        {
            "id": "2",
            "name": "Warren",
            "phone": "1-412-485-9725",
            "company": "Odio Etiam Institute",
            "zip": "10312",
            "city": "Sautin",
            "date": "01/01/13",
            "country":"India"
        },
        {
            "id": "1",
            "name": "Brendan",
            "phone": "1-724-406-2487",
            "company": "Enim Commodo Limited",
            "zip": "98611",
            "city": "Norman",
            "date": "02/13/14",
            "country":"Bangladesh"
        },
        {
            "id": "2",
            "name": "Warren",
            "phone": "1-412-485-9725",
            "company": "Odio Etiam Institute",
            "zip": "10312",
            "city": "Sautin",
            "date": "01/01/13",
            "country":"India"
        },
        {
            "id": "1",
            "name": "Brendan",
            "phone": "1-724-406-2487",
            "company": "Enim Commodo Limited",
            "zip": "98611",
            "city": "Norman",
            "date": "02/13/14",
            "country":"Bangladesh"
        },
        {
            "id": "2",
            "name": "Warren",
            "phone": "1-412-485-9725",
            "company": "Odio Etiam Institute",
            "zip": "10312",
            "city": "Sautin",
            "date": "01/01/13",
            "country":"India"
        },
        {
            "id": "1",
            "name": "Brendan",
            "phone": "1-724-406-2487",
            "company": "Enim Commodo Limited",
            "zip": "98611",
            "city": "Norman",
            "date": "02/13/14",
            "country":"Bangladesh"
        },
        {
            "id": "2",
            "name": "Warren",
            "phone": "1-412-485-9725",
            "company": "Odio Etiam Institute",
            "zip": "10312",
            "city": "Sautin",
            "date": "01/01/13",
            "country":"India"
        }
    ];
    columns = [{ key: 'id', title:"ID", width:50 }, 
            { key: 'name', title:'Name', width:100 }, 
            { key: 'phone', title:'Phone', width:200 }, 
            { key: 'company', title:'Company', width:200 }, 
        { key: 'zip', title: 'ZIP', sorting: false }, 
        { key: 'phone', title:'Phone', width:200 }, 
        { key: 'company', title:'Company', width:200 }, 
        { key: 'zip', title:'ZIP', sorting:false }, 
        { key: 'date', title: 'Date', sorting: false },
        { key: 'zip', title: 'ZIP', sorting: false }, 
        { key: 'phone', title:'Phone', width:200 }, 
        { key: 'company', title:'Company', width:200 }, 
        { key: 'zip', title:'ZIP', sorting:false }, 
        { key: 'date', title: 'Date', sorting:false },
            { key: 'date', title: 'Date', sorting:false }]
    
    
    onRowClick(item: any) { 
        alert(JSON.stringify(item));
    }
}
