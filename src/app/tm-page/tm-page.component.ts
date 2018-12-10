import { Component, OnInit} from '@angular/core';
import { router } from '@angular/router';

@Component({
  selector: 'app-tm-page',
  templateUrl: './tm-page.component.html',
  styleUrls: ['./tm-page.component.css']
})
export class TMPageComponent implements OnInit {

  list: string[] = ['CustomerDossiers', 'TemplateDossierStructure', '個人待辦事項', '個人草稿區', '專案資料夾', '技術內容文件', '新北市捷運工程局', '新北市捷運線', '歷史查詢', '測試資料夾', '部門分類'];

  constructor() { }

  ngOnInit() {
  }

}

