import {Component, Input} from '@angular/core';
import {Item} from '../../data/item.interface';

@Component({
  selector: 'starwars-card',
  templateUrl: './starwars-card.component.html',
  styleUrls: ['./starwars-card.component.sass']
})
export class StarwarsCardComponent {

  @Input() data: Item;
  @Input() types: string[];

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
