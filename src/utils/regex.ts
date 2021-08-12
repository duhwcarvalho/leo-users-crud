export function removeAllCharactersExceptNumbers(value: string): string {
  const _value = value.replace(/\D+/g, '');

  return _value;
};

export function addMask(value: string, pattern: string): string {
  let i = 0;
  const v = value.toString();

  return pattern.replace(/#/g, () => v[i++] || '');
}