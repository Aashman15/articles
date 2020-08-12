import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArticlesComponent } from './articles/articles.component';
import { WritersComponent } from './writers/writers.component';
import { NotificationComponent } from './notification/notification.component';
import { AccountComponent } from './account/account.component';
import { WriterDetailsComponent } from './writers/writer-details/writer-details.component';
import { WritersListComponent } from './writers/writers-list/writers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticlesComponent,
    WritersComponent,
    NotificationComponent,
    AccountComponent,
    WriterDetailsComponent,
    WritersListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
