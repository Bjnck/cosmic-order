import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'cardTitle'})
export class CardTitlePipe implements PipeTransform {

  transform(title : string): boolean {
   return title.length > 26;
  }
}
