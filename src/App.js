import './App.css';
import {useState} from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Input from './components/Input';
import ListDisplay from './components/ListDisplay';
import EmptyMessage from './components/EmptyMessage';

function App() {
  const [listContainer, setListContainer] = useState([]);

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
      
      
      <Footer/>
    </div>
  );
}

export default App;
