import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() activePageChanged = new EventEmitter<string>();
  activePage = 'home';

  constructor() {
  }

  ngOnInit(): void {
  }

  changeActivePage(page: string) {
    this.activePage = page;
    this.activePageChanged.emit(this.activePage);
  }

}
