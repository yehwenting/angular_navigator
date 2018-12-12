import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import a from '../../assets/value.json';
import * as a from '../../assets/value.json';

@Component({
  selector: 'app-tm-page',
  templateUrl: './tm-page.component.html',
  styleUrls: ['./tm-page.component.css']
})
export class TMPageComponent implements OnInit {


  // list: string[] = ['CustomerDossiers', 'TemplateDossierStructure', '個人待辦事項', '個人草稿區', '專案資料夾', '技術內容文件', '新北市捷運工程局', '新北市捷運線', '歷史查詢', '測試資料夾', '部門分類', '測試資料夾', '部門分類'];

  tData = JSON.stringify(a);
  file_path = JSON.parse(this.tData)['default'];
  originItem = this.file_path;
  // originItem:  Array<string> = a;
  // displayValue: Array<string> = a;
  title = '技術管理';
  // data = JSON.stringify(this.tData);

  constructor(private route: ActivatedRoute) {
    // console.log(a.length);
    // console.log(this.file_path[0]);
    // console.log(JSON.parse(a));
    // console.log("const: ", this.displayValue);

  }

  getValue(t) {
    // const title = this.title;
    // console.log(title);
    // const k = this.originItem.filter(function(item, index, array) {
    //   console.log(item);
    //   return item.name === title;
    // });
    // // console.log(t.name, t.children);
    // console.log(k);
    // this.file_path = k[0].children;
    // console.log(this.file_path);
    // // this.title = t.name;

  }

  back() {
    const title = this.title;
    console.log('current title', title);
    const k = this.originItem.filter(function(item, index, array) {
      const len = item.children.length;
      for (let i = 0; i < len; i++) {
        return item.children[i].name === title;
      }
    });
    console.log('back', k);
    this.title = k[0].name;
    this.file_path = k;
    // console.log('back', this.file_path);
    // console.log('back origin', this.originItem);


  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      // console.log(params['name']);
      if (params['name'] !== undefined) {
        this.title = params['name'];
      }

    const title = this.title;
    console.log(title);
    const k = this.file_path.filter(function(item, index, array) {
      console.log(item);
      return item.name === title;
    });
    // console.log(t.name, t.children);
    console.log(k);
    this.file_path = k[0].children;
    console.log(this.file_path);
    // this.title = t.name;
    });
  }

}

