export interface ILesson {
  time: string;
  subject: string;
  lecturer: string;
  classroom: string;
}
export type ILessonList = { dayId: number; lessons: ILesson[] };
export type IGroup = { id: string; lessons: ILessonList[] };
export interface IUser {
  name: string;
  password: string;
  role: 'lecturer' | 'student' | 'admin';
}

export interface IServerSchedule {
  Number: string;
  IdGroup: string;
  Days: {};
}
