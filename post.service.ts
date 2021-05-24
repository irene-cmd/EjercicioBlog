import { HttpClientModule, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Post } from './post.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  post: Post[];

  httpClientModule!: HttpClientModule;

  constructor() {

    this.post = [
      { titulo: 'Siglo XVIII', texto: 'En el siglo XVIII, durante el Rococó destaca la pintura francesa', autor: 'Pedro Pérez', imagen: 'rococó', fecha: 20200617, categoria: 'Pintura' },
      { titulo: 'Siglo XIX', texto: 'En el XIX hubieron cambios sociales', autor: 'Pepito Pérez', imagen: 'industriaXIX', fecha: 20200618, categoria: 'Historia' },
      { titulo: 'Siglo XIX', texto: 'Hubo varias corrientes artísticas', autor: 'Juan Rodríguez', imagen: 'impresionismo', fecha: 20200619, categoria: 'Pintura' },
      { titulo: 'Siglo XX', texto: 'Nace el movimiento de las vanguardias', autor: 'Manuel López', imagen: 'vanguardias', fecha: 20200620, categoria: 'Pintura' },
      { titulo: 'Siglo XX', texto: 'Destacan escultores como Oteiza', autor: 'Jaime López', imagen: 'Oteiza', fecha: 20200621, categoria: 'Escultura' }
    ]
  }

  agregarPost() {
    const post = Array.prototype.push('nuevopost')
  }

  getAllPosts() {
    const post = Array.prototype.get(`${this.post}`, httpOptions).toPromise()
  }


  getPostsByCategoria() {
    let postsElements = this.getPostsByCategoria();
    const postsCat = Array.prototype.filter.call(postsElements, function (postElement) {
      return postElement.nodeName === 'cat';
    });
  }

}

function httpOptions(_arg0: string, _httpOptions: any) {
  throw new Error('Function not implemented.');
}

