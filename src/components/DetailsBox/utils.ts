export function getTwitterUrl(handle: string): string {
  if (!handle) {
    return '';
  }
  return `https://twitter.com/${handle}`;
}
