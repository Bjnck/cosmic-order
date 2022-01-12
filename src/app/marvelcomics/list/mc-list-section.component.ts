import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointState} from '@angular/cdk/layout';
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

  @Input() isMobile: Observable<BreakpointState>;

  expanded: boolean = false;
  ngOnChanges() {
    this.expand(this.arcValue);
  }

  private expand(arc: string) {
    if (arc && this.section && this.section.arcs.find(a => a.ref == arc)) {
      this.expanded = true;
      if (this.arcValue) {
        setTimeout(() => {
            let el = document.getElementById(this.arcValue);
            el.scrollIntoView(true);
            el.scrollIntoView(true);
          },
          100);
      }
    }
  }

  openArc(arc: string) {
    this.openArcEventEmitter.emit(arc);
  }

  closeArc() {
    this.closeArcEventEmitter.emit();
  }
}
