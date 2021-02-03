import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-campo-formulario',
  templateUrl: './campo-formulario.component.html',
  styleUrls: ['./campo-formulario.component.css']
})
export class CampoFormularioComponent implements OnInit {

  @Input() public nome: string;
  @Input() campo: AbstractControl;

  public exibirErro(error: any) {
    if (error['required']) {
      return `Campo ${this.nome} obrigatório`;
    } else if (error['email']) {
      return `Campo ${this.nome} não é um endereço vaálido`;
    }
  }

  ngOnInit() {
  }

}
