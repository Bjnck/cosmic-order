import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Era} from './data/era.interface';
import {Location} from '@angular/common';
import {McPickerComponent} from './picker/mc-picker.component';
import {McPickerIssueComponent} from './picker/mc-picker-issue.component';
import {McPickerCollectionComponent} from './picker/mc-picker-collection.component';
import {CollectionService} from './data/collection/collection.service';
import {McListCardComponent} from './list/card/mc-list-card.component';
import {DataService} from './data/data.service';
import {EraService} from './data/era/era.service';
import {Observable} from 'rxjs';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';

@Component({
  selector: 'marvel-comics',
  templateUrl: './marvel-comics.component.html',
  styleUrls: ['./marvel-comics.component.sass']
})
export class MarvelComicsComponent implements OnInit {
  data: Era[];

  issueValue: string = McPickerComponent.ALL_SELECTOR;
  collectionValue: string = McPickerComponent.ALL_SELECTOR;
  arcValue: string;

  isMobile: Observable<BreakpointState>;

  constructor(private location: Location,
              private route: ActivatedRoute,
              private collectionService: CollectionService,
              private dataService: DataService,
              private eraService: EraService,
              private breakpointObserver: BreakpointObserver) {
    this.dataService.setEras(this.route.snapshot.data.data.eras);
    this.data = this.route.snapshot.data.data.eras;
  }

  ngOnInit() {
    this.isMobile = this.breakpointObserver.observe('(max-width: 900px)');

    setTimeout(() => {
      let issue = this.route.snapshot.queryParamMap.get(McPickerIssueComponent.ISSUE_QUERY_PARAM);
      if (issue && (issue == 'essential' || issue == 'optional')) {
        this.issueValue = issue;
      }

      let collection = this.route.snapshot.queryParamMap.get(McPickerCollectionComponent.COLLECTION_QUERY_PARAM);
      if (collection && this.collectionService.collections.find(c => c.ref == collection)) {
        this.collectionValue = collection;
      }

      let arc = this.route.snapshot.queryParamMap.get(McListCardComponent.ARC_QUERY_PARAM);
      if (arc && this.data.find(d => d.sections.find(s => s.arcs.find(a => a.ref == arc)))) {
        this.arcValue = arc;
      }
    });
  }

  openArcForIntro(arc: string) {
    this.openArc('essential', McPickerComponent.ALL_SELECTOR, arc);
  }

  openArcForUpdate(arc: string) {
    this.openArc(McPickerComponent.ALL_SELECTOR, McPickerComponent.ALL_SELECTOR, arc);
  }

  openArcForReading(arc: string) {
    this.openArc(null, null, arc);
  }

  private openArc(issue: string, collection: string, arc: string) {
    if (issue) {
      this.issueValue = issue;
    }
    if (collection) {
      this.collectionValue = collection;
    }
    this.goTo();
    this.arcValue = arc;
  }

  closeArc() {
    this.arcValue = null;
    this.goTo();
  }

  onIssueChange(value: string) {
    this.issueValue = value;
    this.arcValue = null;
    this.goTo();
  }

  onCollectionChange(value: string) {
    this.collectionValue = value;
    this.issueValue = McPickerComponent.ALL_SELECTOR;
    this.arcValue = null;
    this.goTo();
  }

  private goTo() {
    let query = '';

    if (this.issueValue && this.issueValue != McPickerComponent.ALL_SELECTOR) {
      query += McPickerIssueComponent.ISSUE_QUERY_PARAM + '=' + this.issueValue;
    }
    if (this.collectionValue && this.collectionValue != McPickerComponent.ALL_SELECTOR) {
      if (query !== '') {
        query += '&';
      }
      query += McPickerCollectionComponent.COLLECTION_QUERY_PARAM + '=' + this.collectionValue;
    }

    this.location.replaceState(this.location.path()?.split('?')[0], query !== '' ? '?' + query : '');
  }
}
