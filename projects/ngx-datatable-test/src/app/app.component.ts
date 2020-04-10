import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent implements OnInit  {

    navBarShow ={basic:true, pinTab:false, cellTemplate:false, checkbox:false}

    ngOnInit(): void {
    }

    onClickBasic(){
        this.navBarShow ={basic:true, pinTab:false, cellTemplate:false, checkbox:false}
    }

    onClickPinColumn(){
        this.navBarShow ={basic:false, pinTab:true, cellTemplate:false, checkbox:false}
    }

    onClickCellTemplate(){
        this.navBarShow ={basic:false, pinTab:false, cellTemplate:true, checkbox:false}
    }

    onClickCheckbox() { 
        this.navBarShow ={basic:false, pinTab:false, cellTemplate:false, checkbox:true}
    }



    
}
