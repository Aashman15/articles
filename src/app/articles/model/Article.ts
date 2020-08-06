import {Writer} from '../../writters/model/Writer';

export class Article {
  public id: number;
  public title: string;
  public body: string;
  public writer: Writer;

  constructor(id: number, title: string, body: string, writer: Writer) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.writer = writer;
  }
}
