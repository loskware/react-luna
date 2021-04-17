export function createClassNames(...stringOrFalsy) {
  const cn = stringOrFalsy
    .filter((val) => typeof val === "string" && val.trim())
    .join(" ");
  console.log(cn);
  return cn;
}
