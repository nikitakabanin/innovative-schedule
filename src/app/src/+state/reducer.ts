// import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
// import { State } from './facade';
// import { userApiActions } from './actions';
// import { state } from '@angular/animations';
// import { IUser } from '../models';
// const initialState: State = {
//   loadStatus: 'pending',
//   login: undefined,
//   role: undefined,
//   schedule: undefined,
//   authToken: undefined,
// };

// export const scheduleFeature = createFeature({
//   name: 'schedule',
//   reducer: createReducer(
//     initialState,
//     on(userApiActions.loadScheduleSuccess, (state: State, schedule) => ({
//       ...state,
//       schedule: schedule,
//     }))
//   ),
//   extraSelectors: {
//     selectLoadStatus: createSelector((state: State) => state.loadStatus),
//     selectLogin: createSelector((state: State) => state.login),
//     selectRole: createSelector((state: State) => state.role),
//     selectSchedule: createSelector((state: State) => state.schedule),
//     selectAuthToken: createSelector((state: State) => state.authToken),
//   },
// });

// export const scheduleFeature = createFeature({
//   name: 'schedule',
//   reducer: createReducer(
//     initialState,
//     on(userApiActions.loadScheduleSuccess, (state: State, schedule) => ({
//       ...state,
//       schedule: schedule,
//     }))
//   ),
// });
