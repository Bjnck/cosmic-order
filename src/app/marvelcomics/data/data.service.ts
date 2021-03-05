import {Injectable} from '@angular/core';
import {Era} from './era.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private cache: Era[] = [];

  public getEras(): Era[] {
    return this.cache;
  }

  public setEras(eras: Era[]): Era[] {
    return this.cache = eras;
  }

}
