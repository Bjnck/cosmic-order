import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'mc-picker-issue',
  templateUrl: './mc-picker-issue.component.html',
  styleUrls: ['./mc-picker-issue.component.sass']
})
export class McPickerIssueComponent {

  public static ISSUE_QUERY_PARAM: string = 'issue';

  @Input() mobile: boolean;
  @Input() picker: string;

  @Output() pickerChangeEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  pickerChange() {
    this.pickerChangeEventEmitter.emit(this.picker);
  }
}
