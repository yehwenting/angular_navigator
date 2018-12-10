import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Input() name: string;
  @Input() scanstatus: string;


  constructor() { 
    
  }

  getStatus(){
    if(this.scanstatus==="hide"){
      return "hide";
    }else{
      return "";
    }
  }
  ngOnInit() {
  }

}
