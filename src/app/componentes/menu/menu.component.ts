import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  status1: boolean = false;
  status2: boolean = false;
  status3: boolean = false;

  constructor() { 
  }

  ngOnInit() {
  }

  
  clickEvent(lista){
    console.log("lista:" + lista);
    switch (lista) {
      case 'l1':
          this.status1 = true;
          this.status2 = false;
          this.status3 = false;
        break;
        
      case 'l2':
        this.status1 = false;
        this.status2 = true;
        this.status3 = false;
        break;
          
      case 'l3':
        this.status1 = false;
        this.status2 = false;
        this.status3 = true;
        break;
        
      default:
        this.status1 = true;
        this.status2 = true;
        this.status3 = true;
        break;
    } 
    return this;
  }
}


