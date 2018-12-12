import { Component, OnInit} from '@angular/core';;
import { Router } from '@angular/router';
import * as b from '../../assets/filePath.json';


@Component({
  selector: 'app-tm-page',
  templateUrl: './tm-page.component.html',
  styleUrls: ['./tm-page.component.css']
})
export class TMPageComponent implements OnInit {

  tData = JSON.stringify(b);
  file_path = JSON.parse(this.tData)['default'];
  originItem = this.file_path;
  title = '技術管理';

  constructor(private router: Router) { }

  go2next(t) {
    this.title = t.name;
    this.file_path = this.originItem.filter((item, index, array) => {
      return item.parent === this.title;
    });
  }

  back() {
    const p = this.originItem.find((item, index, array) => {
      return item.name === this.title;
    });
    if (p === undefined) {
      this.router.navigate(['/home']);
    } else {
      this.file_path = this.originItem.filter((item, index, array) => {
        return item.parent === p.parent;
      });

      if (p.parent === '') {
        this.title = '技術管理文件';
      } else {
        this.title = p.parent;
      }
    }


  }
  ngOnInit() {
    this.file_path = this.originItem.filter(function(item, index, array) {
      return item.parent === '';
    });
  }

}

