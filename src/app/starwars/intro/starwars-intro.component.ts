import {Component, EventEmitter, Output} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';

@Component({
  selector: 'starwars-intro',
  templateUrl: './starwars-intro.component.html',
  styleUrls: ['./starwars-intro.component.sass']
})
export class StarwarsIntroComponent {
  isMobile: Observable<BreakpointState>;

  @Output() openArcEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.isMobile = this.breakpointObserver.observe('(max-width: 900px)');
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
