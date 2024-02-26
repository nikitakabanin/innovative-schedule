import { Pipe, PipeTransform } from '@angular/core';

interface IDictionary {
  [key: number]: string;
}

@Pipe({
  name: 'weekDay',
  standalone: true,
})
export class WeekDayPipe implements PipeTransform {
  private dict: IDictionary = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье',
  };
  transform(value: number, ...args: unknown[]): string {
    return this.dict[value];
  }
}
