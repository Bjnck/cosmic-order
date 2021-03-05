import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Collection} from '../data/collection/collection.interface';
import {CollectionService} from '../data/collection/collection.service';

@Component({
  selector: 'mc-picker-collection',
  templateUrl: './mc-picker-collection.component.html',
  styleUrls: ['./mc-picker-collection.component.sass']
})
export class McPickerCollectionComponent {

  public static COLLECTION_QUERY_PARAM: string = 'collection';

  @Input() picker: string;

  @Output() pickerChangeEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor(private collectionService: CollectionService) {
  }

  get collections(): Collection[] {
    return this.collectionService.collections;
  }

  pickerChange() {
    this.pickerChangeEventEmitter.emit(this.picker);
  }
}
