import { Component } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  get historial() {

    return this.gifsSvc.historial

  }

  constructor(private gifsSvc:GifsService){ }

  buscar(termino:string) {

    this.gifsSvc.buscarGifs(termino)

  }

}
