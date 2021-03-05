import {Pipe, PipeTransform} from '@angular/core';
import {Arc} from '../../data/arc/arc.interface';
import {ArcFilterService} from '../../data/arc/arc-filter.service';

@Pipe({name: 'arcImportance'})
export class ArcImportancePipe implements PipeTransform {

  transform(arc: Arc, importance: string): boolean {
    return ArcFilterService.isOfImportance(arc, importance);
  }
}
