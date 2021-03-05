import {Component, EventEmitter, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogData} from './mc-list-card.component';
import {Observable} from 'rxjs';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';

@Component({
  templateUrl: './details.dialog.html',
  styleUrls: ['./details.dialog.sass']
})
export class DetailsDialog {

  displayedColumns: string[] = ['issue', 'trade', 'omnibus'];

  openArcEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  isMobile: Observable<BreakpointState>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
              private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.isMobile = this.breakpointObserver.observe('(max-width: 800px)');
  }

  onReading(arc: string) {
    this.openArcEventEmitter.emit(arc);
  }
}
