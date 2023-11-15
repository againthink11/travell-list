import { useState } from 'react';
import Logo from './components/Logo/Logo';
import Form from './components/Form/Form';
import PackegingList from './components/PackegingList/PackegingList';
import Stats from './components/Stats/Stats';

function App() {
  const [items, setItems] = useState([]);
  const handleAddItem = (item) => {
    setItems((items)=> [...items, item])
  }
  
  return (
    <>
      <Logo/>
      <Form handleAddItem={handleAddItem}/>
      <PackegingList initialItems={items} setItems={setItems}/>
      <Stats/>
    </>
  );
}

export default App;
