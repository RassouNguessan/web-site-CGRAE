import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-st-back-top',
  standalone: true,
  imports: [],
  templateUrl: './st-back-top.component.html',
  styleUrl: './st-back-top.component.css'
})
export class StBackTopComponent implements OnInit{

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
