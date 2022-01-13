import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {Eras} from '../data/eras.interface';
import {Observable} from 'rxjs';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';

@Component({
  selector: 'starwars-list',
  templateUrl: './starwars-list.component.html',
  styleUrls: ['./starwars-list.component.sass']
})
export class StarwarsListComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  @Input() data: Eras;
  @Input() types: string[];

  isMobile: Observable<BreakpointState>;

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.isMobile = this.breakpointObserver.observe('(max-width: 900px)');
  }
}
