import Item from './Item';
import Fade from 'react-reveal';
export default function GroceryList({ items, onDeleteItem, onToggleItem }) {
  return (
    <>
      <Fade>
        <ul>
          {items.map((item) => (
            <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
          ))}
        </ul>
      </Fade>
    </>
  );
}
