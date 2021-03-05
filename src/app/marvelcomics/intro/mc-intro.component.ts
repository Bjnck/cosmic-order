import {Component, EventEmitter, Output} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';

@Component({
  selector: 'mc-intro',
  templateUrl: './mc-intro.component.html',
  styleUrls: ['./mc-intro.component.sass']
})
export class McIntroComponent {
  isMobile: Observable<BreakpointState>;

  @Output() openArcEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.isMobile = this.breakpointObserver.observe('(max-width: 900px)');
  }

  onStart(arc: string) {
    this.openArcEventEmitter.emit(arc);
  }
}
