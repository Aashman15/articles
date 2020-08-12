import {Component, Input, OnInit} from '@angular/core';
import {Writer} from '../model/Writer';

@Component({
  selector: 'app-writer-details',
  templateUrl: './writer-details.component.html',
  styleUrls: ['./writer-details.component.css']
})
export class WriterDetailsComponent implements OnInit {
  @Input() writer: Writer;

  constructor() { }

  ngOnInit(): void {
  }

}
