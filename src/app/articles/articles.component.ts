import {Component, OnInit} from '@angular/core';
import {Article} from './model/Article';
import {Writer} from '../writers/model/Writer';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  writer: Writer = new Writer(1, 'Aashman');

  articles: Article[] = [new Article(1, 'Introduction', 'My name is Aashman Thing.', this.writer),
    new Article(1, 'Introduction', 'My name is Aashman Thing.', this.writer),
    new Article(1, 'Introduction', 'My name is Aashman Thing.', this.writer),
    new Article(1, 'Introduction', 'My name is Aashman Thing.', this.writer),
    new Article(1, 'Introduction', 'My name is Aashman Thing.', this.writer)];

  constructor() {
  }

  ngOnInit(): void {
  }

}
