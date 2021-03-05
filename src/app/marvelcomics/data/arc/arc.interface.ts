import {Issue} from '../issue.interface';
import {Reading} from '../reading.interface';

export interface Arc {
  ref: string;
  title: string;
  importance: string;
  event: string;
  trade: string;
  omnibus: string;
  issues: Issue[];
  collections: string[];
  comment: string;
  reading: Reading;
}
