import {McPickerComponent} from '../../picker/mc-picker.component';
import {IssueFilterService} from '../filter/issue-filter.service';
import {Arc} from './arc.interface';

export class ArcFilterService {

  public static isOfImportance(arc: Arc, importanceFilter: string): boolean {
    if (importanceFilter && importanceFilter != McPickerComponent.ALL_SELECTOR) {
      return IssueFilterService.filterByImportance(arc.issues, arc.importance, importanceFilter).length > 0;
    }
    return true;
  }

  public static isInCollection(arc: Arc, collectionFilter: string): boolean {
    if (collectionFilter && collectionFilter != McPickerComponent.ALL_SELECTOR) {
      return !!(ArcFilterService.collectionHasValue(arc.collections, collectionFilter) ||
        arc.issues.find(issue => ArcFilterService.collectionHasValue(issue.collections, collectionFilter)));
    }
    return true;
  }

  private static collectionHasValue(collections: string[], value: string) {
    if (!collections) {
      return null;
    }
    return collections.find(collection => collection == value);
  }
}
