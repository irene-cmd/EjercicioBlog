import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from '../post/post.interface';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [
  ]
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;
  post!: Post;

  constructor(_post: Post) {
    this.formulario = new FormGroup({
      username: new FormControl,
      password: new FormControl
    })
  }

  ngOnInit(): void {

  }
  get f() { return this.formulario.controls; }//Enviar formulario
}
