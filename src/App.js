import './App.css';
import {useState} from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Input from './components/Input';
import ListDisplay from './components/ListDisplay';
import EmptyMessage from './components/EmptyMessage';

function App() {
  const [listContainer, setListContainer] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [randomItem, setRandomItem] = useState("");

  const rand = () => {
    const randNum = Math.floor(Math.random() * listContainer.length);
    setRandomItem(listContainer[randNum]);
    return randomItem;
}

  const showModal = () => {
    setDisplayModal(true);
    rand();
  }

  const closeModal = () => {
    setDisplayModal(false);
  }

  return (
    <div className="App">
      <Header/>
      <Input
        listContainer={listContainer}
        setListContainer={setListContainer}
      />
      
      <div className="main-section">
        {listContainer.length === 0 &&
          <EmptyMessage/>
        }
        {listContainer.length > 0 &&
          <ListDisplay
          list={listContainer}
          />
        }
      </div>
      <div id="choose-item">
          <button className="choose-btn" onClick={showModal}>Choose Item</button>
      </div>
      <Footer/>
      
      {displayModal &&
        <div className="modal">
          {randomItem}
          {console.log("Random Item: ", randomItem)}
          <button onClick={closeModal}>Close</button>
        </div>
      }
      
    </div>
  );
}

export default App;
