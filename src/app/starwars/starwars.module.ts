import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TopbarModule} from '../topbar/topbar.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {StarwarsComponent} from './starwars.component';
import {StarwarsCardComponent} from './list/card/starwars-card.component';
import {StarwarsListComponent} from './list/starwars-list.component';
import {StarwarsDataResolve} from './data/starwars-data.resolve';
import {StarwarsPickerComponent} from './picker/starwars-picker.component';
import {ReactiveFormsModule} from '@angular/forms';
import {StarwarsIntroComponent} from './intro/starwars-intro.component';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
  declarations: [
    StarwarsComponent,
    StarwarsIntroComponent,
    StarwarsPickerComponent,
    StarwarsListComponent,
    StarwarsCardComponent
  ],
    imports: [
        BrowserModule,
        TopbarModule,
        MatToolbarModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatExpansionModule,
        MatRippleModule
    ],
  providers: [
    StarwarsDataResolve
  ],
  bootstrap: [StarwarsComponent]
})
export class StarwarsModule { }
