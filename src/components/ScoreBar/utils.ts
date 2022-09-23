/**
 * Returns the name of a CSS class with a specific color
 * depending on the given score.
 */
export function getBarColor(score: number): string {
  if (score < 4) {
    return 'bg-orange-500';
  } else if (score < 6) {
    return 'bg-yellow-500';
  } else if (score < 8) {
    return 'bg-lime-500';
  } else {
    return 'bg-green-500';
  }
}

/**
 * Calculates the width of the bar - percentage value is returned.
 */
export function calculateWidth(score: number): string {
  if (score < 0) {
    return '0%';
  } else if (score > 10) {
    return '100%';
  } else {
    return `${(score / 10) * 100}%`;
  }
}
