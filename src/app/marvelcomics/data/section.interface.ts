import {Arc} from './arc/arc.interface';

export interface Section {
  ref: string;
  title: string;
  arcs: Arc[];
}
