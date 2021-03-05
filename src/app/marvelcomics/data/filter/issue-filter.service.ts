
import {McPickerComponent} from '../../picker/mc-picker.component';
import {Issue} from '../issue.interface';

export class IssueFilterService {

  public static filterByImportance(issues: Issue[], arcImportance: string, importanceFilter: string): Issue[] {
    if (importanceFilter && importanceFilter != McPickerComponent.ALL_SELECTOR) {
      return issues.filter(issue => this.isOfImportance(issue, arcImportance, importanceFilter));
    }
    return issues;
  }

  public static isOfImportance(issue: Issue, arcImportance: string, importanceFilter: string): boolean {
    let issueImportance = issue.importance || issue.importance == '' ? issue.importance : arcImportance;
    return IssueFilterService.hasValue(issueImportance, importanceFilter);
  }

  private static hasValue(issue: string, value: string) {
    if (value == 'optional') {
      return issue == 'essential' || issue == value;
    }
    return issue == value;
  }

  public static filterByCollection(issues: Issue[], arcCollections: string[], collectionFilter: string): Issue[] {
    if (collectionFilter && collectionFilter != McPickerComponent.ALL_SELECTOR) {
      return issues.filter(issue => this.isInCollection(issue, arcCollections, collectionFilter));
    }
    return issues;
  }

  private static isInCollection(issue: Issue, arcCollections: string[], collectionFilter: string): boolean {
    if(!arcCollections)
      arcCollections = [];
    let issueCollections = issue.collections ? issue.collections : [];
    if (issueCollections.find(c => c == '-' + collectionFilter)) {
      return false;
    }
    return !!(arcCollections.find(c => c == collectionFilter) || issueCollections.find(c => c == collectionFilter));
  }
}
