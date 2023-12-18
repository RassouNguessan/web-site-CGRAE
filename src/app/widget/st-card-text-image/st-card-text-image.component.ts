import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-st-card-text-image',
  standalone: true,
  imports: [],
  templateUrl: './st-card-text-image.component.html',
  styleUrl: './st-card-text-image.component.css'
})
export class StCardTextImageComponent {

  @Input() cardBody: string = `Bienvenue sur le site internet optimisé de l’IPS-CGRAE,
        encore plus riche pour améliorer significativement la connaissance de vos
        prestations et votre confort de navigation.

      Après plusieurs semaines de développement,
        l’Institution de Prévoyance Sociale – Caisse Générale de Retraite des Agents de l’État
        (IPS-CGRAE) a le plaisir de vous présenter son site internet, profondément revisité et
        totalement relooké, pour vous procurer une meilleure expérience client.


      En effet, pour mieux accomplir sa mission principale de gestion des régimes de pension publique,
        l’IPS-CGRAE s’est engagée dans un processus d’optimisation de ses plateformes digitales.
        Puissant outil d’information et de communication en adéquation avec les normes des
        Institutions de Prévoyance Sociale et de la Conférence Interafricaine de la Prévoyance
        Sociale (CIPRES), cette nouvelle vitrine a été conçue pour vous permettre d’accéder
        encore plus aisément à toutes les informations relatives aux prestations,
        aux activités et à l’actualité de l’Institution, partout et à tout instant.

      Parcourir ce site vous embarque dans un voyage de découverte de l’Institution.
        En tapant www.cgrae.ci, toute l’IPS-CGRAE est à votre portée en un clic.`

  @Input() imageCard: string = "assets/image/DG-CEGRAE-BLEU.png"

}
