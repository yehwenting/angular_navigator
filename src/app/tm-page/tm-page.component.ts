import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import a from "../../assets/value.json";

@Component({
  selector: 'app-tm-page',
  templateUrl: './tm-page.component.html',
  styleUrls: ['./tm-page.component.css']
})
export class TMPageComponent implements OnInit {


  list: string[] = ['CustomerDossiers', 'TemplateDossierStructure', '個人待辦事項', '個人草稿區', '專案資料夾', '技術內容文件', '新北市捷運工程局', '新北市捷運線', '歷史查詢', '測試資料夾', '部門分類', '測試資料夾', '部門分類'];

  tData = JSON.stringify(a);
  originItem:  Array<string> = a;
  displayValue: Array<string> = a;
  title ="技術管理"
  // data = JSON.stringify(this.tData);
  

  constructor() { 
    console.log(a.length);
    console.log("const: ", this.displayValue);

  };

  getValue(t){
    console.log("on click: ", t);
    this.originItem=t;
    this.displayValue=t.children;
    console.log("get children: ", this.displayValue);
    this.title=t.name;
  }

  back(){
    console.log("back", this.displayValue);
    console.log("back origin", this.originItem);


  }
  ngOnInit() {
  }

}

