import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { Tipus, TipusTargetaComponent } from '../tipus-targeta/tipus-targeta.component';

@Component({
  imports: [HeroComponent, TipusTargetaComponent],
  selector: 'app-principal',
  styleUrl: './principal.component.css',
  templateUrl: './principal.component.html',
})
export class PrincipalComponent {
  // Llista de tipus que es mostren a les targetes
  protected readonly tipusPokemon: Tipus[] = [
    {nom: 'Foc', descripcio: 'Fort contra Planta i Gel, però feble contra Aigua.', inicial: 'Charmander', color: 'border-orange-500'},
    {nom: 'Aigua', descripcio: 'Fort contra Foc i Roca, però feble contra Planta.', inicial: 'Squirtle', color: 'border-blue-500'},
    {nom: 'Planta', descripcio: 'Fort contra Aigua i Terra, però feble contra Foc.', inicial: 'Bulbasaur', color: 'border-green-500'},
    {nom: 'Elèctric', descripcio: 'Fort contra Aigua i Volador, però feble contra Terra.', inicial: 'Cap', color: 'border-yellow-400'},
    {nom: 'Gel', descripcio: 'Fort contra Planta i Drac, però feble contra Foc.', inicial: 'Cap', color: 'border-cyan-400'},
    {nom: 'Fantasma', descripcio: 'Fort contra Psíquic i Fantasma, però feble contra Sinistre.', inicial: 'Cap', color: 'border-purple-500'},
  ];
}
