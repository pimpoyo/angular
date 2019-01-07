import { Injectable } from '@angular/core';
import { Trabajo } from '../entidades/app.entidades.trabajo';
import { Trabajo } from '../../assets/img';

@Injectable({
  providedIn: 'root'
})
export class TrabajosService {

  private trabajos:Trabajo[] = [];

  constructor() {
    this.trabajos.push(new Trabajo(1, "Nike",            "Gráfico",           "../../assets/img/main-calendar.jpg",       "trabajo/nike/index.html"));
    this.trabajos.push(new Trabajo(2, "Lady Snow",       "Gráfico",           "../../assets/img/main-cine.jpg",           "trabajo/ladySnow/index.html"));
    this.trabajos.push(new Trabajo(3, "Lotus",           "Gráfico",           "../../assets/img/main-reloj.jpg",          "trabajo/lotus/index.html"));
    this.trabajos.push(new Trabajo(4, "H&M",             "Gráfico",           "../../assets/img/main-modelo.jpg",         "trabajo/hym/index.html"));
    this.trabajos.push(new Trabajo(5, "Marca",           "Gráfico",           "../../assets/img/main-mundial.jpg",        "trabajo/marca/index.html"));
    this.trabajos.push(new Trabajo(6, "Harley",          "Gráfico",           "../../assets/img/main-vtwin.jpg",          "trabajo/harley/index.html"));
    this.trabajos.push(new Trabajo(7, "Cocina",          "3D",                "../../assets/img/main-cocina.jpg",         "trabajo/cocina/index.html"));
    this.trabajos.push(new Trabajo(8, "Misión América",  "3D",                "../../assets/img/main-tazon.jpg",          "trabajo/misionAmerica/index.html"));
    this.trabajos.push(new Trabajo(9, "PNB",             "Animación Web",     "../../assets/img/main-PNB.jpg",            "trabajo/PNB/index.html"));
    this.trabajos.push(new Trabajo(10,"8 inteligencias", "Animación Web",     "../../assets/img/main-8inteligencias.jpg", "trabajo/8inteligencias/index.html"));
    this.trabajos.push(new Trabajo(11,"Repostal",        "Imagen corporativa","../../assets/img/main-repostal.jpg",       "trabajo/repostal/index.html"));
    this.trabajos.push(new Trabajo(12,"BBVA",            "Diseño Web",        "../../assets/img/main-bbva.jpg",           "trabajo/bbva/index.html"));
    this.trabajos.push(new Trabajo(13,"Meraki",          "Diseño Editorial",  "../../assets/img/main-meraki.jpg",         "trabajo/meraki/index.html"));
    this.trabajos.push(new Trabajo(14,"El Amanuense",    "Packaging",         "../../assets/img/main-amanuense.jpg",      "trabajo/amanuense/index.html"));
    this.trabajos.push(new Trabajo(15,"Curso fotografía","Gráfico",           "../../assets/img/main-curso.jpg",          "trabajo/curso/index.html"));
    this.trabajos.push(new Trabajo(16,"Colegio IA",      "Diseño Web",        "../../assets/img/main-aravaca.jpg",        "trabajo/aravaca/index.html"));
    console.log("CREANDO TRABAJOS_SERVICE");
  }

  public insertar(trabajo:Trabajo):void{
    trabajo.id = Math.floor(Math.random()*1000000);
    this.trabajos.push(trabajo);
  }

  public listar():Trabajo[]{
    return this.trabajos;
  }

  public buscar(id:number):Trabajo{
    return this.trabajos.find(function(t){
      return t.id == id;
    });
  }

}