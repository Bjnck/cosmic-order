import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Era} from '../data/era.interface';

@Component({
  selector: 'mc-picker-era',
  templateUrl: './mc-picker-era.component.html'
})
export class McPickerEraComponent {

  public static ERA_QUERY_PARAM: string = 'era';

  @Input() data: Era[];
  @Input() picker: string;

  @Output() pickerChangeEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  pickerChange() {
    this.pickerChangeEventEmitter.emit(this.picker);
  }
}
