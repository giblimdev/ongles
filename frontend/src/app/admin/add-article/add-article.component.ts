import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Article } from '../../interfaces/article.model';
import { ArticleService } from '../../services/article.service';
import { NotificationService } from '../../services/notification.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-article',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {
  articleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private notificationService: NotificationService
  ) {
    this.articleForm = this.fb.group({
      store: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }

  ngOnInit(): void {
  }

  onSubmit() { 
    if (this.articleForm.valid) { 
      const article: Article = this.articleForm.value; this.articleService.createArticle(article) .subscribe(
        { next: (response) => { this.notificationService.success('Article créé avec succès'); 

        }, 
        error: (error) => { this.notificationService.error(`Une erreur est survenue lors de la création de l'article : ${error.message}`); } }); } else { 
    this.notificationService.error('Veuillez corriger les erreurs dans le formulaire.'); 
  } 
}
}
