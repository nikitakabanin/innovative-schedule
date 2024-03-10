import { Observable } from 'rxjs';
import { IGroup, IUser } from '../models';
export interface State {
  authToken?: string | number | null;
  login?: string;
  role?: IUser['role'];
  schedule?: IGroup[];
  loadStatus: 'success' | 'failed' | 'pending';
}
