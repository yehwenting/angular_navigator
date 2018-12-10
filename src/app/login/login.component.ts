import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  border="2px solid #cacbce";
  border1="2px solid #cacbce";
  border2="2px solid #cacbce";

  constructor() { }

  ngOnInit() {
  }

  onTextClick(t){
    if(t==="account"){
      this.border="2px solid #3c73c1";
      this.border1="2px solid #cacbce";
      this.border2="2px solid #cacbce";
    }else if(t==="password"){
      this.border1="2px solid #3c73c1";
      this.border="2px solid #cacbce";
      this.border2="2px solid #cacbce";
    }else{
      this.border2="2px solid #3c73c1";
      this.border1="2px solid #cacbce";
      this.border="2px solid #cacbce";
    }
  }
}
