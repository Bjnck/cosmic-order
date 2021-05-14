import {Pipe, PipeTransform} from '@angular/core';
import {Arc} from '../../data/arc/arc.interface';
import {ArcService} from '../../data/arc/arc.service';
import {ArcFilterService} from '../../data/arc/arc-filter.service';

@Pipe({name: 'reading'})
export class ReadingPipe implements PipeTransform {

  constructor(private arcService: ArcService) {
  }

  transform(reading: string[], importance: string, importanceFilter: string, collectionFilter: string): Arc[] {
    if (!reading) {
      return [];
    }
    if (importance == 'optional') {
      return reading.map(ref => this.arcService.getArc(ref))
        .filter(arc => ArcFilterService.isOfImportance(arc, importanceFilter))
        .filter(arc => ArcFilterService.isInCollection(arc, collectionFilter));
    } else {
      let arcs: Arc[] = [];
      reading.forEach(ref => {
        this.getEssential(ref, importanceFilter, collectionFilter)
          .forEach((arc: Arc) => {
            if (!arcs.find(v => arc.ref == v.ref)) {
              arcs.push(arc);
            }
          });
      });
      return arcs;
    }
  }

  private getEssential(ref: string, importanceFilter: string, collectionFilter: string): Arc[] {
    let arc = this.arcService.getArc(ref);
    let arcs = [];
    if (ArcFilterService.isOfImportance(arc, importanceFilter) && ArcFilterService.isInCollection(arc, collectionFilter)) {
      arcs.push(arc);
    } else if(arc.reading && arc.reading.essential){
      arc.reading.essential.forEach(r => {
        this.getEssential(r, importanceFilter, collectionFilter).forEach(arc => arcs.push(arc));
      });
    }
    return arcs;
  }


}
