import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'http://www.google.com';
  cursoAngular = false;
  urlImagem = 'http://nbtravelguide.com/wp-content/uploads/2014/05/nature-400x200.jpg';
  valorAtual = '';
  valorSalvo = '';
  isMouseOver = false;

  getValor() {
    return 10;
  }

  getCurtirCurso() {
    return false;
  }

  botaoClicado() {
    alert('aqui');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }


  constructor() { }

  ngOnInit() {
  }

}
