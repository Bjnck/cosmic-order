import {McPickerComponent} from '../picker/mc-picker.component';
import {Arc} from '../data/arc/arc.interface';

export class ArcFilterService {

  public static filterByIssues(arcs: Arc[], issueValue: string): Arc[] {
    if (issueValue && issueValue != McPickerComponent.ALL_SELECTOR) {
      return arcs.filter(arc => this.issueHasValue(arc.importance, issueValue) ||
        arc.issues.find(issue => this.issueHasValue(issue.importance, issueValue)));
    }
    return arcs;
  }

  private static issueHasValue(issue: string, value: string) {
    if (value == 'optional') {
      return issue == 'essential' || issue == value;
    }
    return issue == value;
  }

  public static filterByCollections(arcs: Arc[], collectionValue: string): Arc[] {
    if (collectionValue && collectionValue != McPickerComponent.ALL_SELECTOR) {
      return arcs.filter(arc => this.collectionHasValue(arc.collections, collectionValue) ||
        arc.issues.find(issue => this.collectionHasValue(issue.collections, collectionValue))
      );
    }
    return arcs;
  }

  private static collectionHasValue(collections: string[], value: string) {
    if(!collections)
      return null;
    return collections.find(collection => collection == value);
  }


}
