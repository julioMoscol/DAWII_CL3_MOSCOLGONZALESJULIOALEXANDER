import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { correo } from './correo';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  constructor(private httpcliente: HttpClient) { }

  getCorreoFiltrado(): Observable<correo[]> {
    return this.httpcliente.get<correo[]>("https://jsonplaceholder.typicode.com/comments").pipe(
      // Aplicamos el filtro en el flujo de datos
      map(comments => comments.filter((comment: correo) => comment.email.endsWith('@garfield.biz')))
    );
  }
}
