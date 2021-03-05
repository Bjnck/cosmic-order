import {Pipe, PipeTransform} from '@angular/core';
import {Arc} from '../../data/arc/arc.interface';
import {McPickerComponent} from '../../picker/mc-picker.component';
import {IssueFilterService} from '../../data/filter/issue-filter.service';

@Pipe({name: 'issue'})
export class IssuePipe implements PipeTransform {

  transform(arc: Arc, issueValue: string, collectionValue: string) {
    if (collectionValue && collectionValue != McPickerComponent.ALL_SELECTOR) {
      return IssueFilterService.filterByCollection(arc.issues, arc.collections, collectionValue);
    } else if (issueValue && issueValue != McPickerComponent.ALL_SELECTOR) {
      return IssueFilterService.filterByImportance(arc.issues, arc.importance, issueValue);
    }
    return arc.issues;
  }
}
