import {Component, OnInit} from '@angular/core';
import {Writer} from './model/Writer';

@Component({
  selector: 'app-writers',
  templateUrl: './writers.component.html',
  styleUrls: ['./writers.component.css']
})
export class WritersComponent implements OnInit {
  selectedWriter: Writer;
  constructor() {
  }

  ngOnInit(): void {
  }

}
