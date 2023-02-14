


export default function Button({ children, onTap }){
  return (
    <button className="px-5 py-1 hover:bg-gray-300 rounded-md border border-gray-400 font-medium bg-white" onClick={onTap}>
      { children }
    </button>
  )
}