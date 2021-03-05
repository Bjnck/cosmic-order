import {Pipe, PipeTransform} from '@angular/core';
import {Era} from '../data/era.interface';

@Pipe({name: 'era'})
export class EraPipe implements PipeTransform {

  transform(eras: Era[], eraValue: string) {
    return eras.find(era => era.ref == eraValue);
  }
}
