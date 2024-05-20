export interface ILesson {
  time: string;
  discipline: string;
  lecturer: string;
  classroom: string;
  week_code: number;
  day: string;
}
// export type ILessonList = { dayId: number; lessons: ILesson[] };
export type ILessonList = { lessons: ILesson[] };
export type IGroup = { id: string; lessons: ILessonList[] };
export interface IUser {
  name: string;
  password: string;
}

//

export interface AuthData {
  token: string;
}
