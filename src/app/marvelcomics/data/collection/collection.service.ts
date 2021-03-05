import {Injectable} from '@angular/core';
import {Collection} from './collection.interface';
import {Arc} from '../arc/arc.interface';
import {Issue} from '../issue.interface';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {

  public collections: Collection[] = [
    <Collection> {ref: 'AW', name: 'Adam Warlock', color: 'orange'},
    <Collection> {ref: 'A', name: 'Avengers', color: '#e4e3ff'},
    <Collection> {ref: 'CM', name: 'Captain Marvel', color: '#f5483e'},
    <Collection> {ref: 'GG', name: 'Guardians of the Galaxy', color: '#ffe200'},
    <Collection> {ref: 'IH', name: 'Inhumans', color: '#216685'},
    <Collection> {ref: 'N', name: 'Nova', color: '#384fd6'},
    <Collection> {ref: 'Q', name: 'Quasar', color: '#b82200'},
    <Collection> {ref: 'SS', name: 'Silver Surfer', color: 'silver'},
    <Collection> {ref: 'TH', name: 'Thanos', color: '#ae50f1'},
    <Collection> {ref: 'X', name: 'X-Men', color: '#d7555f'},
  ];

  public getIssuesForSelector(arc: Arc, selector: string): Issue[] {
    if (!this.collections.find(collection => collection.ref == selector)) {
      return arc.issues;
    }

    let arcMatchSelector: boolean = arc.collections != null && !!arc.collections.find(c => c == selector);

    let issues: Issue[] = [];
    for (const issue of arc.issues) {
      if (issue.collections == null) {
        if (arcMatchSelector) {
          issues.push(issue);
        }
      } else {
        if (!issue.collections.find(c => c == '-' + selector)) {
          if (arcMatchSelector || issue.collections.find(c => c == selector)) {
            issues.push(issue);
          }
        }
      }
    }
    return issues;
  }
}
