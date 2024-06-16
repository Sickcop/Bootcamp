import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPagesComponent } from './gifs-pages/gifs-pages.component';
import { ResultadosPagesComponent } from './resultados-pages/resultados-pages.component';
import { BusquedasComponent } from './busquedas/busquedas.component';



@NgModule({
  declarations: [
    GifsPagesComponent,
    ResultadosPagesComponent,
    BusquedasComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GifsPagesComponent
  ]
})
export class GifsModule { }
