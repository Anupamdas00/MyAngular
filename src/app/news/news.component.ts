import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public newsContent: any;
  public newsArticle: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getNews().subscribe((res) => {
      this.newsContent = res.articles;
      this.newsArticle = this.newsContent.articles;
      // console.log(this.newsArticle);
      // console.log(this.newsContent);
    })
  }



}
