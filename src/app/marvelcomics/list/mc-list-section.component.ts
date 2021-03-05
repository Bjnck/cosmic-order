import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {Section} from '../data/section.interface';

@Component({
  selector: 'mc-list-section',
  templateUrl: './mc-list-section.component.html',
  styleUrls: ['./mc-list-section.component.sass']
})
export class McListSectionComponent {

  @Input() section: Section;
  @Input() issueValue: string;
  @Input() collectionValue: string;
  @Input() arcValue: string;

  @Output() openArcEventEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() closeArcEventEmitter: EventEmitter<void> = new EventEmitter<void>();

  isMobile: Observable<BreakpointState>;

  expanded: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.isMobile = this.breakpointObserver.observe('(max-width: 800px)');
  }

  ngOnChanges() {
    this.expand(this.arcValue);
  }

  private expand(arc: string) {
    if (arc && this.section && this.section.arcs.find(a => a.ref == arc)) {
      this.expanded = true;
    }
  }

  openArc(arc: string) {
    this.openArcEventEmitter.emit(arc);
  }

  closeArc() {
    this.closeArcEventEmitter.emit();
  }
}
