import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'starwars-picker',
  templateUrl: './starwars-picker.component.html',
  styleUrls: ['./starwars-picker.component.sass']
})
export class StarwarsPickerComponent {

  @Output() typeChangeEventEmitter: EventEmitter<string[]> = new EventEmitter<string[]>();
  typeList: string[] = ['Live Action', 'Animation', 'Books', 'Comics'];
  types: FormControl = new FormControl(this.typeList);

  onTypeChange(types: string[]) {
    let transformedTypes = types
      .map(type => type.toLowerCase().replace(' ', ''))
      .map(type => {
        if (type == 'books') {
          return 'book';
        } else if (type == 'comics') {
          return 'comic';
        } else if (type == 'liveaction') {
          return 'live';
        } else {
          return type;
        }
      });
    console.log(transformedTypes);
    this.typeChangeEventEmitter.emit(transformedTypes);
  }
}
