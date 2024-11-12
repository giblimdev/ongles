import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Path } from '../../interfaces/path.model';

@Component({
  selector: 'app-articlepath',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './articlepath.component.html',
  styleUrls: ['./articlepath.component.scss']
})
export class ArticlepathComponent {
  stores = [
    { id: '1', name: 'Store 1' },
    { id: '2', name: 'Store 2' }
  ];

  categories = [
    { id: 'category1', name: 'Category 1' },
    { id: 'category2', name: 'Category 2' }
  ];

  classes = [
    { id: 'classe1', name: 'Classe 1' },
    { id: 'classe2', name: 'Classe 2' }
  ];

  subclasses = [
    { id: 'subclasse1', name: 'Subclasse 1' },
    { id: 'subclasse2', name: 'Subclasse 2' }
  ];

  codes = [
    { id: 'code1', name: 'Code 1' },
    { id: 'code2', name: 'Code 2' }
  ];

  selectedStoreId: string = this.stores[0].id; // Initialisation avec une valeur par défaut
  selectedCategoryId: string = this.categories[0].id; // Initialisation avec une valeur par défaut
  selectedClasseId: string = this.classes[0].id; // Initialisation avec une valeur par défaut
  selectedSubclasseId: string = this.subclasses[0].id; // Initialisation avec une valeur par défaut
  selectedCodeId: string = this.codes[0].id; // Initialisation avec une valeur par défaut
  generatedPath: string = ''; // Initialisation avec une chaîne vide

  getArticlePath(article: Path): string {
    return `${article.store_id}/${article.category_id}/${article.classe_id}/${article.subclasse_id}/${article.code_id}`;
  }

  generatePath(): void {
    const article: Path = {
      store_id: this.selectedStoreId,
      category_id: this.selectedCategoryId,
      classe_id: this.selectedClasseId,
      subclasse_id: this.selectedSubclasseId,
      code_id: this.selectedCodeId
    };
    this.generatedPath = this.getArticlePath(article);
  }
}
