import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interfaces';
import { catchError } from 'rxjs';

const URL = 'https://api.giphy.com/v1/gifs/search'
const APIkey = 'Uf0D093OxH5Va8H9IA2G4AEcrR8ddLSz'

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[]=[];

  resultados:Gif[]=[]

  get historial(){
    return [...this._historial]
  }

  constructor(private http:HttpClient) { }

  buscarGifs(query:string=''){

    this._historial.unshift(query)

    const params = new HttpParams()
    .set('api_key', APIkey)
    .set('limit', 10)
    .set('q',query)

    this.http.get<SearchGifsResponse>(`${URL}`,{params}).subscribe(res=>{

      this.resultados = res.data

      console.log(this.resultados)

    })

  }
}
