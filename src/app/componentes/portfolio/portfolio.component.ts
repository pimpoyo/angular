import { Component, OnInit } from '@angular/core';
import { Trabajo } from 'src/app/entidades/app.entidades.trabajo';
import { TrabajosService } from 'src/app/servicios/trabajos.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  public trabajos:Trabajo[];

  constructor(trabajosService:TrabajosService) {
    this.trabajos = trabajosService.listar();
  }

  ngOnInit() {
  }

}