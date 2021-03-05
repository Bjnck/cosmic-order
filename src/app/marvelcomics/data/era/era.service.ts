import {Injectable} from '@angular/core';
import {Era} from '../era.interface';
import {DataService} from '../data.service';

@Injectable({
  providedIn: 'root',
})
export class EraService {

  constructor(private dataService: DataService) {
  }

  public getEras(): Era[] {
    return this.dataService.getEras();
  }

  public getEraForArcRef(ref: string): Era {
    for (const era of this.dataService.getEras()) {
      for (const section of era.sections) {
        for (const arc of section.arcs) {
          if (arc.ref == ref) {
            return era;
          }
        }
      }
    }
    return null;
  }
}
