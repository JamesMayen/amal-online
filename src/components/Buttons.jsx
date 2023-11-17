

export default function Button({ text, cName='' }) {
  return (
    <button className={`bg-rose-400 text-white px-4 py-2 rounded ${cName}`}>{text}</button>
  )
}
