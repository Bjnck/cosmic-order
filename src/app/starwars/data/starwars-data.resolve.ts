import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import * as YAML from 'yaml';
import {Eras} from './eras.interface';

@Injectable()
export class StarwarsDataResolve implements Resolve<Eras> {

  constructor(private http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Eras> {
    return this.http.get('assets/data/starwars/starwars.yaml', {observe: 'body', responseType: 'text'})
      .pipe(map(yamlString => YAML.parse(yamlString)));
  }
}
