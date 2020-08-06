import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArticlesComponent } from './articles/articles.component';
import { WrittersComponent } from './writters/writters.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticlesComponent,
    WrittersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
