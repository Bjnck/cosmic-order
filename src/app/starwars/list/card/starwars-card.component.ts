import {Component, Input} from '@angular/core';
import {Item} from '../../data/item.interface';
import {Observable} from 'rxjs';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';

@Component({
  selector: 'starwars-card',
  templateUrl: './starwars-card.component.html',
  styleUrls: ['./starwars-card.component.sass']
})
export class StarwarsCardComponent {

  @Input() data: Item;
  @Input() types: string[];

  isMobile: Observable<BreakpointState>;

  constructor(private breakpointObserver: BreakpointObserver,) {
  }

  ngOnInit() {
    this.isMobile = this.breakpointObserver.observe('(max-width: 900px)');
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
