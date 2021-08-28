import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {Era} from './era.interface';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import * as YAML from 'yaml';

@Injectable()
export class MarvelComicsDataResolve implements Resolve<Era[]> {

  constructor(private http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Era[]> {
    return this.http.get('assets/data/marvelcomics/marvelcosmic.yaml', {observe: 'body', responseType: 'text'})
      .pipe(map(yamlString => YAML.parse(yamlString)));
  }
}
