import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Form({ onAddItem }) {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const newItem = {
      name,
      checked: false,
      id: uuidv4(),
    };

    onAddItem(newItem);
    setName('');
  }

  return (
    <div className="flex relative justify-between sm:max-lg">
      <h1 className="text-xl md:text-2xl underline ">What is your main focus today?</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Write note" className="border border-b-gray-400  py-1 m-2 border-transparent outline-none" autoFocus value={name} onChange={(e) => setName(e.target.value)} />
        <button className=" border-b-black bg-black text-white px-3 py-1 border">Add</button>
      </form>
    </div>
  );
}
