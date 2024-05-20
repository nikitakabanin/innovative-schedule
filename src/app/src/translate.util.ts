export function translateGroup(value: string): string {
  let translate: any = {
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
  let a = Object.keys(translate);

  return [...value]
    .map((v: string) => (a.includes(v) ? translate[v] : v))
    .join('');
}

export function translateBackGroup(value: string): string {
  let translate: any = {
    А: 'A',
    Б: 'B',
    В: 'V',
    О: 'O',
    М: 'M',
    Е: 'E',
    И: 'I',
    С: 'C',
    Р: 'R',
  };

  let result = '';

  for (let v of value) {
    if (Object.keys(translate).includes(v)) {
      result += translate[v];
    } else {
      result += v;
    }
  }

  return result;
}
