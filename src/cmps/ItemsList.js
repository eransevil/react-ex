import React from 'react'
import Item from './Item.js'
export default function ItemsList({ items, onOpenModal }) {
    console.log(items)
    return (
        <div>
            {items.map((item) => (
                <Item key={item.name} item={item} onOpenModal={onOpenModal}></Item>
            ))}
        </div>
    )
}
