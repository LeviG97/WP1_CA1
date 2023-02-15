import { Component, OnInit, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  @Input()
  article!: Article;


  constructor() { 
    //this.article = new Article("Angular", "http://angular.io", 10)
    new Article("Angular", "http://angular.io", 5),
      new Article("Google", "http://google.com", 3),
      new Article("TikTok", "http://tiktok.com", 1)
  }

  ngOnInit() { 

  }

  voteUp():boolean{
    this.article.voteUp();
    return false;
  }

  voteDown():boolean{
    this.article.voteDown();
    return false;
  }
}
