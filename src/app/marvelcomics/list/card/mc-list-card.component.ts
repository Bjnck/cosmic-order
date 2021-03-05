import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DetailsDialog} from './details.dialog';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {Arc} from '../../data/arc/arc.interface';
import {ActivatedRoute} from '@angular/router';
import {McPickerEraComponent} from '../../picker/mc-picker-era.component';
import {Location} from '@angular/common';
import {McPickerIssueComponent} from '../../picker/mc-picker-issue.component';
import {McPickerCollectionComponent} from '../../picker/mc-picker-collection.component';

export interface DialogData {
  arc: Arc;
  issueValue: string,
  collectionValue: string;
}

@Component({
  selector: 'mc-list-card',
  templateUrl: './mc-list-card.component.html',
  styleUrls: ['./mc-list-card.component.sass']
})
export class McListCardComponent {

  public static ARC_QUERY_PARAM: string = 'arc';

  @Input() arc: Arc;
  @Input() collectionValue: string;
  @Input() issueValue: string;
  @Input() arcValue: string;

  @Output() openArcEventEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() closeArcEventEmitter: EventEmitter<void> = new EventEmitter<void>();

  isMobile: Observable<BreakpointState>;

  arcEvent: string;

  constructor(public dialog: MatDialog,
              private breakpointObserver: BreakpointObserver,
              private location: Location,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.isMobile = this.breakpointObserver.observe('(max-width: 800px)');
  }

  ngOnChanges() {
    let arcQuery = this.route.snapshot.queryParamMap.get(McListCardComponent.ARC_QUERY_PARAM);
    if (this.arcValue && this.arc.ref == this.arcValue) {
      setTimeout(() => this.openDialog(!arcQuery), 200);
    }
  }

  openDialog(setLocation: boolean) {
    if (setLocation) {
      this.location.go(this.location.path() + '&' + McListCardComponent.ARC_QUERY_PARAM + '=' + this.arc.ref);
    }
    let dialogRef = this.dialog.open(DetailsDialog, {
      width: '100%',
      maxWidth: '1000px',
      data: {
        arc: this.arc,
        issueValue: this.issueValue,
        collectionValue: this.collectionValue
      }
    });
    const sub = dialogRef.componentInstance.openArcEventEmitter.subscribe(event => {
      this.arcEvent = event;
      dialogRef.close();
    });
    dialogRef.afterClosed().subscribe(() => {
      this.location.go((this.location.path().split('&arc')[0]));
      sub.unsubscribe();
      this.closeArcEventEmitter.emit();
      if (this.arcEvent) {
        this.openArcEventEmitter.emit(this.arcEvent);
        this.arcEvent = null;
      } else {
        this.closeArcEventEmitter.emit();
      }
    });
  }
}
