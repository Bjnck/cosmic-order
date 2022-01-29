import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'starwars-picker',
  templateUrl: './starwars-picker.component.html',
  styleUrls: ['./starwars-picker.component.sass']
})
export class StarwarsPickerComponent implements OnInit{

  @Output() typeChangeEventEmitter: EventEmitter<string[]> = new EventEmitter<string[]>();
  typeList: string[] = ['Live Action', 'Animation', 'Books', 'Comics', 'Game'];
  types: FormControl = new FormControl(this.typeList);

  isMobile: Observable<BreakpointState>;

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.isMobile = this.breakpointObserver.observe('(max-width: 900px)');
  }

  onTypeChange(types: string[]) {
    let transformedTypes = types
      .map(type => type.toLowerCase().replace(' ', ''))
      .map(type => {
        if (type === 'books') {
          return 'book';
        } else if (type === 'comics') {
          return 'comic';
        } else if (type === 'liveaction') {
          return 'live';
        } else if (type === 'game') {
          return 'game';
        } else {
          return type;
        }
      });
    this.typeChangeEventEmitter.emit(transformedTypes);
  }
}
