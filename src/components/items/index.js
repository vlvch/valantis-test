import React from 'react';
import './style.css'

const Item = ({ item }) => {
  const { id, price, product, brand } = item;
  return (
    <div className="Item" id={id}>
      <div className="Item-brand">{brand}</div>
      <div className="Item-product">{product}</div>
      <div className="Item-id">{id}</div>
      <div className="Item-price">{price}</div>
    </div>
  )
}

const Items = ({ items }) => {
  const result = items.map((item) => <Item key={item.id} item={item} />);

  return (
    <div className="Items">
      {result}
    </div>
  )
}

export default React.memo(Items);