import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MarvelComicsComponent} from './marvelcomics/marvel-comics.component';
import {DataResolve} from './marvelcomics/data/data.resolve';

const routes: Routes = [
  {
    path: 'marvelcosmic',
    component: MarvelComicsComponent,
    resolve: {
      data: DataResolve
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
