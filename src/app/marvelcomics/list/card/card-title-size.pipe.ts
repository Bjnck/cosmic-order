import {Pipe, PipeTransform} from '@angular/core';
import {Arc} from '../../data/arc/arc.interface';

@Pipe({name: 'cardTitleSize'})
export class CardTitleSizePipe implements PipeTransform {

  transform(title: string, size:number): string {
    if (title && title.length > size) {
      return title.substr(0, size-3) + '...';
    }
    return title;
  }
}
