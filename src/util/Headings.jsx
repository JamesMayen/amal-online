export function Heading1({ text, cName = "" }) {
  return <h1 className={`text-4xl ${cName}`}>{text}</h1>;
}
export function Heading2({ text, cName = "" }) {
  return <h1 className={`md:text-2xl text-xl font-thin ${cName}`}>{text}</h1>;
}
export function Heading3({ text, cName = "" }) {
  return <h3 className={`text-xl ${cName}`}>{text}</h3>;
}
