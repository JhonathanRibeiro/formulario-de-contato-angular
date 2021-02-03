import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit{
  title = 'Formulário';
  public form: FormGroup;

  constructor() {
    this.form =  new FormGroup({
      nome: new FormControl(null, [
        Validators.required
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      mensagem: new FormControl(),
      cpf: new FormControl(),
      cnpj: new FormControl(),
      tipoPessoa: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit() {
    this.implementarMudancas();
    const valueStr = localStorage.getItem('contato');
    const value = JSON.parse(valueStr);
    this.form.patchValue(value);
    this.tipoPesssoa.updateValueAndValidity();
    console.log(value);
  }

  private implementarMudancas(): void {
    this.tipoPesssoa.valueChanges.subscribe((value) => {
      if (value ==  'FISICA') {
        this.cpf.enable();
        this.cnpj.disable();
      } else if (value == 'JURIDICA') {
        this.cnpj.enable();
        this.cpf.disable();
      } else {
        this.cpf.disable();
        this.cnpj.disable();
      }
    });
  }

  public salvar(): void {
    if(this.form.valid){
      const value = this.form.value;
      localStorage.setItem('contato', JSON.stringify(value));
      alert('Contato foi salvo com sucesso');
    } else {
      alert('Preencha o nome');
      this.form.markAllAsTouched();
    }
  }

  public limpar(): void {
    this.form.reset();
  }

  public get nome() {
    return this.form.get('nome');
  }
  public get email() {
    return this.form.get('email');
  }
  public get tipoPesssoa() {
    return this.form.get('tipoPessoa');
  }
  public get cpf() {
    return this.form.get('cpf');
  }
  public get cnpj() {
    return this.form.get('cnpj');
  }
  public get mensagem() {
    return this.form.get('mensagem');
  }

}
