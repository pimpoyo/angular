import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  status1: string;
  status2: string;
  status3: string;

  constructor() { 
  }

  ngOnInit() {
  }

  
  clickEvent(lista){
    console.log("lista:" + lista);
    this.status1 = '';
    this.status2 = '';
    this.status3 = '';
    switch (lista) {
      case 'l1':
          this.status1 = 'seccion';
        break;
        
      case 'l2':
        this.status2 = 'seccion';
        break;
          
      case 'l3':
        this.status3 = 'seccion';
        break;
        
      default:
        break;
    } 
    return this;
  }
}


