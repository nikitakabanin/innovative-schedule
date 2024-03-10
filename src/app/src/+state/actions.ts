import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IGroup } from '../models';
import { IUser } from '../models';
export const userApiActions = createActionGroup({
  source: 'User API',
  events: {
    'Load Schedule': emptyProps(),
    'Load Schedule Success': props<{ schedule: IGroup[] }>(),
    'Load Schedule Failed': props<{ error: Error }>(),
    'Edit Schedule': props<{ group: IGroup }>(),
    'Try Auth': props<{ user: IUser }>(),
    'Try Register': props<{ user: IUser }>(),
    'Auth Success': emptyProps(),
    'Auth Failed': props<{ error: Error }>(),
    'Register Success': emptyProps(),
    'Register Failed': props<{ error: Error }>(),
  },
});
