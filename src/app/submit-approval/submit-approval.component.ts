import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-approval',
  templateUrl: './submit-approval.component.html',
  styleUrls: ['./submit-approval.component.css']
})
export class SubmitApprovalComponent implements OnInit {

  name = '繳檔簽核';
  sub_per = '部門主管 -  陳xx';
  personnel: string[] = ['部門主管 -  陳xx', '部門主管 -  葉xx', '部門主管 -  黃xx', '部門主管 -  曾xx', '部門主管 -  李xx'];

  constructor() { }

  ngOnInit() {
  }

  popup() {
    console.log("clicked");
    let modal = document.getElementsByClassName('modal') as HTMLCollectionOf<HTMLElement>;
    modal[0].style.display = "block";
  }

  popup_sign() {
    console.log("clicked");
    let modal = document.getElementsByClassName('modal_sign') as HTMLCollectionOf<HTMLElement>;
    modal[0].style.display = "block";
  }

  close_popup() {
    let modal = document.getElementsByClassName('modal') as HTMLCollectionOf<HTMLElement>;
    modal[0].style.display = "none";
  }

  close_popup_sign() {
    let modal = document.getElementsByClassName('modal_sign') as HTMLCollectionOf<HTMLElement>;
    modal[0].style.display = "none";
  }

}
