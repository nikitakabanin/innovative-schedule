import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupName',
  standalone: true,
})
export class GroupNamePipe implements PipeTransform {
  translate: any = {
    A: 'А',
    B: 'Б',
    V: 'В',
    O: 'О',
    M: 'М',
    E: 'Е',
    I: 'И',
    C: 'С',
    R: 'Р',
  };

  transform(value: string): string {
    let a = Object.keys(this.translate);

    return [...value.slice(6)]
      .map((v: string) => (a.includes(v) ? this.translate[v] : v))
      .join('');
  }
}
