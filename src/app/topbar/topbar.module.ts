import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TopbarComponent} from './topbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    TopbarComponent
  ],
    imports: [
        BrowserModule,
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        RouterModule,
        MatIconModule
    ],
  providers: [],
  exports: [
    TopbarComponent
  ],
  bootstrap: [TopbarComponent]
})
export class TopbarModule { }
