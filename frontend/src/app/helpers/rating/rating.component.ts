import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() rating: number = 4.5; // Initialisation avec une valeur par défaut de 4.5
  fullStars: number = 0; // Initialisation avec une valeur par défaut
  halfStar: boolean = false; // Initialisation avec une valeur par défaut
  emptyStars: number = 0; // Initialisation avec une valeur par défaut

  ngOnInit(): void {
    this.fullStars = Math.floor(this.rating);
    this.halfStar = this.rating - this.fullStars >= 0.5;
    this.emptyStars = 5 - this.fullStars - (this.halfStar ? 1 : 0);
  }
}
