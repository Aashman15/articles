import {Component, OnInit} from '@angular/core';
import {Writer} from './model/Writer';

@Component({
  selector: 'app-writers',
  templateUrl: './writers.component.html',
  styleUrls: ['./writers.component.css']
})
export class WritersComponent implements OnInit {
  writers: Writer[] = [new Writer(1, 'Aashman Thing'), new Writer(2, 'Aabhas Rai'),
    new Writer(3, 'Soraj Shrestha')];

  constructor() {
  }

  ngOnInit(): void {
  }

}
