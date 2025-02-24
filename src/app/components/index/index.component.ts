import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements AfterViewInit {

  intervalId: any;
  texto: string = "Hi! I'm João Henrique Dib!";
  index: number = 0;
  caracteres: any = this.texto.split('');

  @ViewChild('title') titleElement!: ElementRef;

  constructor(private router: Router) {} // Injetando Router corretamente

  ngAfterViewInit() {
    // Exemplo: Alterar o texto do parágrafo
    this.intervalId = setInterval(() => {
      this.alterarTexto();
    }, 80);
  }

  alterarTexto() {
    if (this.titleElement.nativeElement.innerHTML !== this.texto) {
      if (this.index % 2 !== 0) {
        this.titleElement.nativeElement.innerHTML = this.titleElement.nativeElement.innerHTML.slice(0, -1);
      }
      this.titleElement.nativeElement.innerHTML += this.caracteres[this.index];
      if (this.index % 2 === 0) {
        this.titleElement.nativeElement.innerHTML += "|";
      }
      this.index++;
    } else {
      clearInterval(this.intervalId);
    }
  }

  redirect(path: string) {
    this.router.navigate([path]); // Correção da navegação
  }
}
