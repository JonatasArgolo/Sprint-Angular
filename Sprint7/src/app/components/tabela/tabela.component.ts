import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabela',
  imports: [],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.css'
})
export class TabelaComponent {
  @Input() vin: string = ''
}
