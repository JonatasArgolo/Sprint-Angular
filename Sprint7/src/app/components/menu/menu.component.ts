import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // Garanta que o CommonModule está aqui se for um componente Standalone
import { Router } from '@angular/router';


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
  router = inject(Router)
  goToDashboard(){
    this.router.navigate(["/dashboard"])
  }
  goToLogin(){
    this.router.navigate(["/login"])
  }
  goToHome(){
    this.router.navigate(["/home"])
  }

}