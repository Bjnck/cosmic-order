import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MarvelComicsComponent} from './marvelcomics/marvel-comics.component';
import {MarvelComicsDataResolve} from './marvelcomics/data/marvel-comics-data.resolve';
import {StarwarsComponent} from './starwars/starwars.component';
import {StarwarsDataResolve} from './starwars/data/starwars-data.resolve';

const routes: Routes = [
  {
    path: 'marvelcosmic',
    component: MarvelComicsComponent,
    resolve: {
      data: MarvelComicsDataResolve
    }
  },
  {
    path: 'marvelcomplete.html',
    redirectTo: 'marvelcosmic',
    pathMatch: 'full'
  },
  {
    path: 'marvelessential.html',
    redirectTo: 'marvelcosmic',
    pathMatch: 'full'
  },
  {
    path: 'starwars',
    component: StarwarsComponent,
    resolve: {
      data: StarwarsDataResolve
    }
  },
  {
    path: '',
    redirectTo: 'marvelcosmic',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
