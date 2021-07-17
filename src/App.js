import './App.css';
import ItemsList from './cmps/ItemsList.js'
import { useEffect, useState } from 'react';


function App() {
  const [items, setItems] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [itemUrl, setitemUrl] = useState(null)
  const [itemType, setItemType] = useState(null)
  const [itemName, setItemName] = useState(null)


  const openModal = (itemName) => {
    setIsModalOpen(!isModalOpen)
    setItemName(itemName)
    setitemUrl(`https://mighty-sierra-05836.herokuapp.com/${itemName}`)
    if (itemName.includes('mp4') || itemName.includes('pdf')) setItemType('other')
    else setItemType('image')
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setitemUrl(null)
    setItemType(null)
    setItemName(null)

  }

  useEffect(() => {
    const getItems = async () => {
      const ItemsFromApi = await fetchItems()
      setItems(ItemsFromApi)
    }
    getItems()
  }, [])

  const fetchItems = async () => {
    const res = await fetch('https://mighty-sierra-05836.herokuapp.com/files')
    const data = await res.json();
    return data.files;
  }

  return (
    <div className="app">
      {items.length > 0 ? <ItemsList items={items} onOpenModal={openModal} ></ItemsList> : 'No Items to show'}

      {isModalOpen && <div className="modal">
        <span className="x-btn" onClick={closeModal}>✖</span>
        <span className="itemName">{itemName}</span>
        {itemType === 'image' && <img className="modalItem" src={itemUrl} alt={itemName} />}
        {itemType === 'other' && <iframe title="iframe" className="modalItem" src={itemUrl}> </iframe>}
      </div>}
    </div>
  );
}

export default App;
