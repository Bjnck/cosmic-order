import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {Era} from '../data/era.interface';
import {Observable} from 'rxjs';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {Section} from '../data/section.interface';

@Component({
  selector: 'mc-list',
  templateUrl: './mc-list.component.html',
  styleUrls: ['./mc-list.component.sass']
})
export class McListComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  @Input() data: Era[];
  @Input() sections: Section[];
  @Input() eraValue: string;
  @Input() issueValue: string;
  @Input() collectionValue: string;
  @Input() arcValue: string;

  @Output() eraSelectionEventEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() openArcEventEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() closeArcEventEmitter: EventEmitter<void> = new EventEmitter<void>();

  isMobile: Observable<BreakpointState>;

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.isMobile = this.breakpointObserver.observe('(max-width: 900px)');
  }

  openArc(arc: string) {
    this.openArcEventEmitter.emit(arc);
  }

  closeArc() {
    this.closeArcEventEmitter.emit();
  }
}
