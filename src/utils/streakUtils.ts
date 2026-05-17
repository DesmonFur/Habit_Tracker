export function streakCount(completedDates: string[]): number {
  const sortedDates = completedDates.sort((a, b) => b.localeCompare(a));

  let streakCount = 0;
  let expected = new Date();

  for (let i = 0; i < sortedDates.length; i++) {
    if (sortedDates[i] === expected.toISOString().split("T")[0]) {
      streakCount++;
      expected.setDate(expected.getDate() - 1);
    } else {
      break;
    }
  }

  return streakCount;
}
