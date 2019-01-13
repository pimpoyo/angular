import { Injectable } from '@angular/core';
import { Social } from '../entidades/app.entidades.social';

@Injectable({
  providedIn: 'root'
})
export class SocialService {
  private socials:Social[] = [
      {
        id    : 1,
        url   : 'https://es.pinterest.com/anapimpoyo/',
        icon  : 'icon-pinterest'
      },
      {
        id    : 2,
        url   : 'https://twitter.com/p1mp0y0',
        icon  : 'icon-twitter'
      },
      {
        id    : 3,
        url   : 'https://www.linkedin.com/in/pimpoyo',
        icon  : 'icon-linkedin'
      },
      {
        id    : 4,
        url   : 'https://github.com/pimpoyo',
        icon  : 'icon-github'
      }
  ];

  constructor() { 
    console.log("CREANDO SOCIALS_SERVICE");
  }

  // public insertar(trabajo:Trabajo):void{
  //   trabajo.id = Math.floor(Math.random()*1000000);
  //   this.trabajos.push(trabajo);
  // }

  public listar():Social[]{
    return this.socials;
  }

  public buscar(id:number):Social{
    return this.socials.find(function(t){
      return t.id == id;
    });
  }
}