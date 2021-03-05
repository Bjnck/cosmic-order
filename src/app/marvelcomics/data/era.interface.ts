import {Section} from './section.interface';

export interface Era {
  ref: string;
  title: string;
  date: string;
  comment: string;
  sections: Section[];
}
