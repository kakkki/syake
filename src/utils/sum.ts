// export const sum = (a: number, b: number) => a + b
export const sum
  = (...a: number[]) =>
    a.reduce((acc, val) => acc + val, 0);