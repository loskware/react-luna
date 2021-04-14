export function createClassNames(...stringOrFalsy) {
  return stringOrFalsy.filter(val => typeof val === "string" && val.trim()).join(" ");
}