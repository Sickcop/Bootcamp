import { Component } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-busquedas',
  templateUrl: './busquedas.component.html',
  styleUrls: ['./busquedas.component.css']
})
export class BusquedasComponent {

  constructor(private gifsvc: GifsService) { }

  buscar(termino:string) {

    this.gifsvc.buscarGifs(termino)

  }

}
