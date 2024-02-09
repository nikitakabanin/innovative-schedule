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
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
  };
  transform(value: number, ...args: unknown[]): string {
    return this.dict[value];
  }
}
