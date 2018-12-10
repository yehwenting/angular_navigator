import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temp-page',
  templateUrl: './temp-page.component.html',
  styleUrls: ['./temp-page.component.css']
})
export class TempPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.page = this.router.url.split("/");
    this.currentPage = this.page[this.page.length-1];
  }

}
