export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li key={item} className="text-xl underline text-gray-700 pt-4">
      <input type="checkbox" checked={item.checked} onChange={() => onToggleItem(item.id)} className="h-5 w-5 me-5 accent-slate-950 cursor-pointer" />
      <span style={item.checked ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.name}
      </span>
      <button onClick={() => onDeleteItem(item.id)} className="ms-5 text-2xl text-gray-400 font-bold">
        &times;
      </button>
    </li>
  );
}
