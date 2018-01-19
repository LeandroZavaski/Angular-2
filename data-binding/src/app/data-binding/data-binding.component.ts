import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'http://www.google.com';
  cursoAngular: boolean = false;
  urlImagem: string = 'http://nbtravelguide.com/wp-content/uploads/2014/05/nature-400x200.jpg';
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  nomeDoCurso: string = 'Angular';
  valorInicial: number = 15;

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
