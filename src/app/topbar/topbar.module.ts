import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TopbarComponent} from './topbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
  ],
  providers: [],
  exports: [
    TopbarComponent
  ],
  bootstrap: [TopbarComponent]
})
export class TopbarModule { }
