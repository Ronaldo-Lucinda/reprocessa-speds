import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'pages-pasta-arquivos',
  templateUrl: './pasta-arquivos.component.html',
  styles: [
  ]
})
export class PastaArquivosComponent implements OnInit {

  constructor() { }

  valorVendaAtual!: string;
  public formGroup: FormGroup | undefined;
  ngOnInit(): void {
debugger
    this.valorVendaAtual = "teste"
    console.log(this.valorVendaAtual)
  }

}
