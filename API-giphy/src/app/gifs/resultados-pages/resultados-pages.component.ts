import { Component } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-resultados-pages',
  templateUrl: './resultados-pages.component.html',
  styleUrls: ['./resultados-pages.component.css']
})
export class ResultadosPagesComponent {

  get resultados() {

    return this.gifsSvc.resultados

  }

  constructor(private gifsSvc:GifsService) {

  }

}
