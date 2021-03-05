import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {Era} from '../data/era.interface';
import {MatDialog} from '@angular/material/dialog';
import {UpdateDialog} from '../update/update.dialog';

@Component({
  selector: 'mc-picker',
  templateUrl: './mc-picker.component.html',
  styleUrls: ['./mc-picker.component.sass']
})
export class McPickerComponent {

  public static ALL_SELECTOR: string = 'all';

  @Input() data: Era[];
  @Input() eraValue: string;
  @Input() issueValue: string;
  @Input() collectionValue: string;

  @Output() eraChangeEventEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() collectionChangeEventEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() issueChangeEventEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() openArcEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  isMobile: Observable<BreakpointState>;

  showFilter: boolean = false;

  arcEvent:string;

  constructor(private breakpointObserver: BreakpointObserver,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.isMobile = this.breakpointObserver.observe('(max-width: 750px)');
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  onEraChange(value: string) {
    this.eraChangeEventEmitter.emit(value);
  }

  onCollectionChange(value: string) {
    this.collectionChangeEventEmitter.emit(value);
  }

  onIssueChange(value: string) {
    this.issueChangeEventEmitter.emit(value);
  }

  openUpdate() {
    let dialogRef = this.dialog.open(UpdateDialog, {width: '100%', maxWidth: '500px'});

    const sub = dialogRef.componentInstance.openArcEventEmitter.subscribe((event) => {
      this.arcEvent = event;
      dialogRef.close();
    });
    dialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe();
      if(this.arcEvent){
        this.openArcEventEmitter.emit(this.arcEvent);
        this.arcEvent = null;
      }
    });
  }
}
