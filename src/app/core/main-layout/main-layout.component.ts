import {Component, HostListener, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent implements OnInit {
  backToTopVisible: boolean = false;

  ngOnInit() {
    this.toggleBackToTop(); // Appel de la fonction lors du chargement du composant

    // Ajout d'un écouteur pour l'événement de défilement
    window.addEventListener('scroll', this.toggleBackToTop);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.toggleBackToTop();
  }

  toggleBackToTop() {
    // Logique pour déterminer s'il faut afficher le bouton "back to top" ou non
    this.backToTopVisible = window.scrollY > 100;
  }

  scrollToTop() {
    // Logique pour faire défiler vers le haut de la page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

export default MainLayoutComponent
