import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';


@Component({
  selector: 'mc-list-card-era',
  templateUrl: './mc-list-card-era.component.html',
  styleUrls: ['./mc-list-card-era.component.sass']
})
export class McListCardEraComponent {

  @Input() ref: string;
  @Input() title: string;
  @Input() date: string;

  @Output() eraSelectEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  isMobile: Observable<BreakpointState>;

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.isMobile = this.breakpointObserver.observe('(max-width: 800px)');
  }

  onClick(value: string) {
    this.eraSelectEventEmitter.emit(value);
  }
}
