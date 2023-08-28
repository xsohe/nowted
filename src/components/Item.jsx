export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li key={item} className="text-xl underline text-gray-700 pt-4">
      <input type="checkbox" checked={item.checked} onChange={() => onToggleItem(item.id)} className="h-5 w-5 me-5 accent-slate-950 cursor-pointer" />
      <span style={item.checked ? { textDecoration: 'line-through' } : {}}>{item.name}</span>
      <button className="ms-8 text-lg border-r px-4 border-gray-300">✏️</button>
      <button onClick={() => onDeleteItem(item.id)} className="ms-4 text-lg text-gray-200 font-bold ">
        ❌
      </button>
    </li>
  );
}
