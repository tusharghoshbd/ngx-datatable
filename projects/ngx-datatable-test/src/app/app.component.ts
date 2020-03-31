import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent implements OnInit  {

    navBarShow ={basic:true, pinTab:false, cellTemplate:false}

    ngOnInit(): void {
    }

    onClickBasic(){
        this.navBarShow ={basic:true, pinTab:false, cellTemplate:false}
    }

    onClickPinColumn(){
        this.navBarShow ={basic:false, pinTab:true, cellTemplate:false}
    }

    onClickCellTemplate(){
        this.navBarShow ={basic:false, pinTab:false, cellTemplate:true}
    }


    
}
