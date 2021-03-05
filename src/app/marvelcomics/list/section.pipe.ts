import {Pipe, PipeTransform} from '@angular/core';
import {Section} from '../data/section.interface';
import {McPickerComponent} from '../picker/mc-picker.component';
import {ArcFilterService} from './arc-filter.service';

@Pipe({name: 'section'})
export class SectionPipe implements PipeTransform {

  transform(sections: Section[], issueValue: string, collectionValue: string) {
    if (collectionValue && collectionValue != McPickerComponent.ALL_SELECTOR) {
      return sections.filter(section => ArcFilterService.filterByCollections(section.arcs, collectionValue).length > 0);
    } else if (issueValue && issueValue != McPickerComponent.ALL_SELECTOR) {
      return sections.filter(section => ArcFilterService.filterByIssues(section.arcs, issueValue).length > 0);
    }

    return sections;
  }
}
