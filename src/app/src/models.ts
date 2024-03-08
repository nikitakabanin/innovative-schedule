export interface ILesson {
  time: string;
  subject: string;
  lecturer: string;
  classroom: string;
}
export type ILessonList = { dayId: number; lessons: ILesson[] };
export type IGroup = { id: string; lessons: ILessonList[] };
export interface AuthUser {
  name: string;
  password: string;
}
