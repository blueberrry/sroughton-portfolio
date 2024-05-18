export function firstCharUpper(text: string): string {
  if (!text) {
    console.warn('🚀 ~ firstCharUpper ~ text:', 'no text string');
    return '';
  }
  return text.charAt(0).toUpperCase() + text.slice(1);
}
