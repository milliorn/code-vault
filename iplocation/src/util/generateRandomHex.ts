/* https://stackoverflow.com/a/58326357/11986604 */
export function generateRandomHex({ size }: { size: number }): string {
  return [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");
}
