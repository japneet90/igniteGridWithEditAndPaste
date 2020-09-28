import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridPartialComponent } from './grid-partial/grid-partial.component';
import { IgxGridModule } from 'igniteui-angular';
import { PasteHandler } from './grid-partial/paste-handler.directive';

@NgModule({
  declarations: [
    AppComponent,
    GridPartialComponent,
    PasteHandler
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
