import { Component } from '@angular/core';
import { RatingComponent } from "../../helpers/rating/rating.component";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RatingComponent],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  article = {
    store: "Ongles",
    category: "Matériel",
    classe: "Matériel Électrique",
    subclasse: "Lampe",
    rank: "0005",
    image: "1_a_522_452_001.png",
    name: "Sun X-11 Max",
    brand: "Sun",
    rating: 4.5,
    reviews: 8,
    summary: "Puissante, simple et efficace, la lampe Led pro 36W hybrid technology catalyse de façon simple et efficace les vernis semi-permanent et gels UV !",
    info: "blanc",
    price: "29.46 €",
    availability: "Disponible",
    description: "Minuterie 10sec, 30s, 60s, 99s «Low Heat» et Faible Consommation. Durée de vie 50.000 heures. Puissance : 54W. Consommation d’entrée : 100-240V, 50/60 Hz 0,3A. Dimensions : 230 x 205 x 92mm. Garantie 2 ans.",
    features: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod, ligula nec suscipit vehicula, libero risus scelerisque urna, a pretium magna quam vitae libero.",
    usage: "Brancher l’adaptateur sur une prise électrique. Lorsque la lampe est en marche, choisir la minuterie de son choix 10/30/60/99s (low heat) en appuyant sur le bouton adéquat. Vous pouvez éteindre l’appareil à tout moment en appuyant de nouveau sur la touche. Si aucune minuterie n’est choisie, la lampe se met automatiquement en marche pour 120s dès que la main est insérée sous la lampe. Les touches (10s, 30s, 60s et 99s) bénéficient de la fonction faible consommation. Appuyer 2s sur la touche 99s pour activer la fonction Faible Consommation, appuyez de nouveau 2 secondes pour la désactiver et revenir à la consommation initiale. Quand la minuterie est en marche, la sélection est visible sur les boutons. Affichage en compte à rebours pour 10s, 30s, 60s. Le bouton 99s et le capteur à infrarouge se déclenchant en chronomètre."
  };

  // Méthodes pour augmenter et diminuer la quantité
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    this.quantity++;
  }

  // Propriété pour la quantité
  quantity = 1;
}
