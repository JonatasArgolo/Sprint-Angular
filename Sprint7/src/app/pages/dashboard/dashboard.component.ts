import { Component } from '@angular/core';
import { CarsComparationComponent } from "../../components/cars-comparation/cars-comparation.component";
import { MenuComponent } from "../../components/menu/menu.component";

@Component({
  selector: 'app-dashboard',
  imports: [CarsComparationComponent, MenuComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
