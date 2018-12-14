import { Component, OnInit} from '@angular/core';
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
  fileName ="";

  constructor(private router: Router) { }

  ngOnInit() {
    this.file_path = this.originItem.filter(function(item, index, array) {
      return item.parent === '';
    });
  }

  go2next(t) {
    const p = this.originItem.find((item, index, array) => {
      return item.name === t.name;
    });
    if(p!== undefined){
      this.title = t.name;
      this.file_path = this.originItem.filter((item, index, array) => {
        return item.parent === this.title;
      });
    }
    
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
  addFile(){
    let modal = document.getElementsByClassName('modal') as HTMLCollectionOf<HTMLElement>;
    modal[0].style.display = "block";
  }
  closeModal(){
    let modal = document.getElementsByClassName('modal') as HTMLCollectionOf<HTMLElement>;
    modal[0].style.display = "none";
  }
  newFile(){
    console.log("new file");
    let modal = document.getElementsByClassName('modal_new') as HTMLCollectionOf<HTMLElement>;
    modal[0].style.display = "block";
  }
  uploadFile(){
    console.log("upload file");
    let modal = document.getElementsByClassName('modal_upload') as HTMLCollectionOf<HTMLElement>;
    modal[0].style.display = "block";
  }

  fileEvent(fileInput: HTMLInputElement){
    let parent="";
    if(this.file_path[0]===undefined){
      parent = "";
    }else{
      parent = this.file_path[0].parent;
    }
    let addfile={
      "children":[],
      "name":fileInput.value,
      "parent": parent
    }
    this.file_path.push(addfile);
    // console.log("new",this.file_path);
    this.fileName = fileInput.value;

  } 

  close_popup_upload() {
    let modal = document.getElementsByClassName('modal_upload') as HTMLCollectionOf<HTMLElement>;
    modal[0].style.display = "none";
    let modal1 = document.getElementsByClassName('modal_new') as HTMLCollectionOf<HTMLElement>;
    modal1[0].style.display = "none";
  }
  finish(value){
    let parent="";
    if(this.file_path[0]===undefined){
      parent = "";
    }else{
      parent = this.file_path[0].parent;
    }
    let addfile={
      "children":[],
      "name": value,
      "parent": parent
    }
    this.file_path.push(addfile);
    let modal = document.getElementsByClassName('modal_new') as HTMLCollectionOf<HTMLElement>;
    modal[0].style.display = "none";
  }


}

