import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.component.css',
  templateUrl: './header.component.html',
})
export class Header {
  // Per saber si el menú està obert al mòbil
  protected readonly menuObert = signal(false);

  protected canviarMenu(){
    this.menuObert.update((valorActual) => !valorActual);
  }

  protected tancarMenu(){
    this.menuObert.set(false);
  }
}