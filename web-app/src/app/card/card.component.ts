import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public exibe = false;
  public descricao = 'Aprendendo JavaScript angular ';
  public usuario = 'Welison Nunes Belo'
  public imagem = '../../assets/images/profile.png'
  public profissao = 'Aluno'

  public buttons = {
    'show': 'Exibir',
    'hide': 'Ocultar',
  }

  constructor() { }

  ngOnInit(): void {
  }

  public exibePerfil() {
    this.exibe = !this.exibe;
  }

}
