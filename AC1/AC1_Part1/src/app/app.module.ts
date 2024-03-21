import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SeguroComponent } from './ac1-seguro/ac1-seguro.component';

@NgModule({
  declarations: [
    AppComponent,
    SeguroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: []
})
export class AppModule { }
