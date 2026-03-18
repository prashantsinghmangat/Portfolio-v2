export function generateContributionData(): number[][] {
  const weeks: number[][] = [];
  const seed = 42;

  for (let w = 0; w < 52; w++) {
    const week: number[] = [];
    for (let d = 0; d < 7; d++) {
      const hash = Math.sin(seed + w * 7 + d) * 10000;
      const val = Math.abs(hash - Math.floor(hash));

      if (val < 0.3) {
        week.push(0);
      } else if (val < 0.5) {
        week.push(1);
      } else if (val < 0.7) {
        week.push(2);
      } else if (val < 0.85) {
        week.push(3);
      } else {
        week.push(4);
      }
    }
    weeks.push(week);
  }

  return weeks;
}

export function getIntensityColor(level: number): string {
  const colors = [
    "bg-zinc-800",
    "bg-violet-900/60",
    "bg-violet-700/60",
    "bg-violet-500/70",
    "bg-violet-400",
  ];
  return colors[level] || colors[0];
}
