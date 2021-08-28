import {Component, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Eras} from './data/eras.interface';

@Component({
  selector: 'starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.sass']
})
export class StarwarsComponent {

  data: Eras;
  types: string[] = ['live', 'animation', 'book', 'comic'];

  constructor(private route: ActivatedRoute) {
    this.data = this.route.snapshot.data.data;
  }

  onTypeChange(types: string[]) {
    this.types = types;
  }

}
