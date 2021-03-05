import {Pipe, PipeTransform} from '@angular/core';
import {McPickerComponent} from '../picker/mc-picker.component';
import {Arc} from '../data/arc/arc.interface';
import {ArcFilterService} from './arc-filter.service';

@Pipe({name: 'arc'})
export class ArcPipe implements PipeTransform {

  transform(arcs: Arc[], issueValue: string, collectionValue: string) {
    if (collectionValue && collectionValue != McPickerComponent.ALL_SELECTOR) {
      return ArcFilterService.filterByCollections(arcs, collectionValue);
    } else if (issueValue && issueValue != McPickerComponent.ALL_SELECTOR) {
      return ArcFilterService.filterByIssues(arcs, issueValue);
    }
    return arcs;
  }
}
