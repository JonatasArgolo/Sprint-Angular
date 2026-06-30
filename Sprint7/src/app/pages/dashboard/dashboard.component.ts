import { Component, inject, OnInit } from '@angular/core';
import { CarsComparationComponent } from "../../components/cars-comparation/cars-comparation.component";
import { MenuComponent } from "../../components/menu/menu.component";
import { TabelaComponent } from "../../components/tabela/tabela.component";
import { DashboardService } from '../../services/dashboard.service';
import { Veiculo } from '../../models/car';

@Component({
  selector: 'app-dashboard',
  imports: [CarsComparationComponent, MenuComponent, TabelaComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  dashboardService = inject(DashboardService)
  
  veiculos: Veiculo[] = []
  VeiculoSelecionado: Veiculo | undefined = {
    id: -1,
    connected: 0,
    volumetotal: 0,
    softwareUpdates: 0,
    vehicle: "",
    img: "",
    vin: "",

    
  }
  ngOnInit(){
    this.dashboardService.getCars().subscribe({
      error: () => {},
            next: (resposta: any) => {
        const listaOriginal = resposta.vehicles as Veiculo[];

       this.veiculos = listaOriginal.map(v => {
        const urlOriginal = v.img ?? '';
        const nomeArquivo = urlOriginal.substring(urlOriginal.lastIndexOf('/') + 1);

        return {
          ...v,
          img: `./images/${nomeArquivo}`
        };
      });

        if (this.veiculos.length > 0) {
          this.VeiculoSelecionado = this.veiculos[0];
        }
      }
    })
  }
  onCarChange(event: Event) {
  const selectElement = event.target as HTMLSelectElement;
  const idSelecionado = Number(selectElement.value);
  
  const carroEncontrado = this.veiculos.find(v => v.id === idSelecionado);
  if (carroEncontrado) {
    this.VeiculoSelecionado = carroEncontrado;
  }
}
}
