import {Injectable} from '@angular/core';
import {DataService} from '../data.service';
import {Arc} from './arc.interface';

@Injectable({
  providedIn: 'root',
})
export class ArcService {

  constructor(private dataService: DataService) {
  }

  public getArc(ref: string): Arc {
    for (const era of this.dataService.getEras()) {
      for (const section of era.sections) {
        for (const arc of section.arcs) {
          if (arc.ref == ref) {
            return arc;
          }
        }
      }
    }
    return null;
  }
}
