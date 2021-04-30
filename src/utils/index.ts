export function getRandomNote() {
  const notes = ["C", "D", "E", "F", "G", "A", "B"];
  return getRandomArrayItem(notes);
}

export function getRandomArrayItem<A>(arr: A[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// basic vanilla javaScript lodash times method clone
export function times(count: number, func: any) {
  let i = 0,
    results = [];
  while (i < count) {
    results.push(func(i));
    i += 1;
  }
  return results;
}
