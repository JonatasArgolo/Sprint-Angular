import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Garanta que o CommonModule está aqui se for um componente Standalone

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  
  isMenuOpen = false;

  
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}