import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from '../post/post.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styles: [
  ]
})
export class BlogComponent implements OnInit {
  //Recibe del servicio todos los posts y LOS MUESTRA DE MODO ORDENADO
  formulario: FormGroup;

  constructor(private post: Post) {
    this.formulario = new FormGroup({
      title: new FormControl,
      text: new FormControl,
      autor: new FormControl,
      date: new FormControl,
      category: new FormControl
    })

  }

  ngOnInit(): void {//Inicializa el blog
    console.log('Component has been initialized')
  }

}
