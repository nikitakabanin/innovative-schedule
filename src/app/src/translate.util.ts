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

  return [...value.slice(6)]
    .map((v: string) => (a.includes(v) ? translate[v] : v))
    .join('');
}
