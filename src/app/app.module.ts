import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { ContenidoComponent } from './componentes/contenido/contenido.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContenidoComponent,
    PortfolioComponent,
    SobreMiComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
