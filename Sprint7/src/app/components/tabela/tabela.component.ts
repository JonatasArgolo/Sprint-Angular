import { Component, inject, Input } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-tabela',
  imports: [],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.css'
})
export class TabelaComponent {
  @Input() vin: string = ''
  dashboardService = inject(DashboardService)

  VinSelect: any | undefined = {
    id: -1,
    odometro: 0,
    nivelCombustivel: 0,
    status: '',
    lat: 0,
    long: 0
  };
  getVin() {
    // ADICIONE ESSE LOG PARA MATAR A CHARADA:
    console.log("-> O VIN QUE VAI PRO BACKEND É:", this.vin);

    if (!this.vin) {
      console.warn("A variável vin está vazia!");
      return;
    }

    this.dashboardService.getVin(this.vin).subscribe({
      error: (err) => {
        console.error("Erro retornado pelo servidor:", err);
      },
      next: (resposta: any) => {
        console.log("Dados recebidos:", resposta);
        this.VinSelect = resposta;
      }
    });
  }
}
