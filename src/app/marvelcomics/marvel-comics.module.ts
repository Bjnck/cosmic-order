import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MarvelComicsComponent} from './marvel-comics.component';
import {TopbarModule} from '../topbar/topbar.module';
import {McIntroComponent} from './intro/mc-intro.component';
import {McPickerComponent} from './picker/mc-picker.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {McListComponent} from './list/mc-list.component';
import {McListCardComponent} from './list/card/mc-list-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {DetailsDialog} from './list/card/details.dialog';
import {MatDialogModule} from '@angular/material/dialog';
import {McPickerCollectionComponent} from './picker/mc-picker-collection.component';
import {McPickerEraComponent} from './picker/mc-picker-era.component';
import {DataResolve} from './data/data.resolve';
import {McListCardEraComponent} from './list/card/mc-list-card-era.component';
import {McListSectionComponent} from './list/mc-list-section.component';
import {EraPipe} from './list/era.pipe';
import {McPickerIssueComponent} from './picker/mc-picker-issue.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {SectionPipe} from './list/section.pipe';
import {ArcPipe} from './list/arc.pipe';
import {MatTableModule} from '@angular/material/table';
import {IssueImportancePipe} from './list/card/issue-importance.pipe';
import {CardTitlePipe} from './list/card/card-title.pipe';
import {UpdateDialog} from './update/update.dialog';
import {IssuePipe} from './list/card/issue.pipe';
import {ArcImportancePipe} from './list/card/arc-importance.pipe';
import {ReadingPipe} from './list/card/reading.pipe';
import {CardTitleSizePipe} from './list/card/card-title-size.pipe';

@NgModule({
  declarations: [
    MarvelComicsComponent,
    McIntroComponent,
    McPickerComponent,
    McPickerCollectionComponent,
    McPickerEraComponent,
    McPickerIssueComponent,
    McListComponent,
    McListSectionComponent,
    McListCardComponent,
    McListCardEraComponent,
    EraPipe,
    SectionPipe,
    ArcPipe,
    IssuePipe,
    ArcImportancePipe,
    CardTitlePipe,
    CardTitleSizePipe,
    ReadingPipe,
    IssueImportancePipe,
    DetailsDialog,
    UpdateDialog
  ],
  imports: [
    BrowserModule,
    TopbarModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
    MatTooltipModule,
    MatTableModule
  ],
  providers: [
    DataResolve,
    McPickerComponent
  ],
  bootstrap: [MarvelComicsComponent]
})
export class MarvelComicsModule { }
