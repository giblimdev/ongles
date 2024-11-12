import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] 
})
export class HeaderComponent { 
  messageTop ="Mon message";
  logInfo ='Connexion';
  itemNb = 4;
  categories = [ 
    { name: 'Category 1', 
      classes: ['Class 1.1', 'Class 1.2', 'Class 1.3', 'Class 1.4', 'Class 1.5', 'une classe'] }, 
    { name: 'Category 2', 
      classes: ['Class 2.1', 'Class 2.2', 'Class 2.3', 'Class 2.4', 'Class 2.5'] }, 
    { name: 'Category 3', 
      classes: ['Class 3.1', 'Class 3.2', 'Class 3.3', 'Class 3.4', 'Class 3.5', 'Class 3.6', 'Class 3.7'] },
      { name: 'Category 4', 
        classes: ['Class 4.1', 'Class 4.2', 'Class 4.3', 'Class 4.4', 'Class 1.5'] },  
  ];
  activeCategoryIndex: number | null = null; 
  showClasses(index: number) { this.activeCategoryIndex = index; } 
  hideClasses() { this.activeCategoryIndex = null; } }