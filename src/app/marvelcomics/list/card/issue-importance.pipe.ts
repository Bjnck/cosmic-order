import {Pipe, PipeTransform} from '@angular/core';
import {Arc} from '../../data/arc/arc.interface';
import {Issue} from '../../data/issue.interface';
import {IssueFilterService} from '../../data/filter/issue-filter.service';

@Pipe({name: 'issueImportance'})
export class IssueImportancePipe implements PipeTransform {

  transform(issue: Issue, arc: Arc, importance: string): boolean {
    return IssueFilterService.isOfImportance(issue, arc.importance, importance);
  }
}
