import { Component, input } from '@angular/core';

export interface Tipus {
  nom: string;
  descripcio: string;
  inicial: string;
  color: string;
}

@Component({
  imports: [],
  selector: 'app-tipus-targeta',
  host: { class: 'block' },
  styleUrl: './tipus-targeta.component.css',
  templateUrl: './tipus-targeta.component.html',
})
export class TipusTargetaComponent {
  readonly tipus = input.required<Tipus>();
}
