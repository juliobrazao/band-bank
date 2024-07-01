export function Capitalize(text: string): string {
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
}

export function CapitalizeMultiple(text: string): string {
  return text
    .split(" ")
    .map((word) => Capitalize(word))
    .join(" ");
}
