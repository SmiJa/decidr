import './App.css';
import {useState} from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Input from './components/Input';
import ListDisplay from './components/ListDisplay';
import EmptyMessage from './components/EmptyMessage';

function App() {
  const [listContainer, setListContainer] = useState([]);
  // console.log(listContainer.length);

  return (
    <div className="App">
      <Header/>
      <Input/>
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
