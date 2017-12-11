import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParagraphSpecComponent } from './paragraph-spec/paragraph-spec.component';


@NgModule({
  declarations: [
    AppComponent,
    ParagraphSpecComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
