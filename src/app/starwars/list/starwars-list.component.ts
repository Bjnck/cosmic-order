import {Component, Input, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {Eras} from '../data/eras.interface';

@Component({
  selector: 'starwars-list',
  templateUrl: './starwars-list.component.html',
  styleUrls: ['./starwars-list.component.sass']
})
export class StarwarsListComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  @Input() data: Eras;
  @Input() types: string[];
}
