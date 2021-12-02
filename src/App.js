import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
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
    const [showWarning, setShowWarning] = useState(false);
    const [message, setMessage] = useState("");

    const randItem = () => {
        const randNum = Math.floor(Math.random() * listContainer.length);
        setRandomItem(listContainer[randNum]);
        return randomItem;
    }

    const showModal = () => {   
        setDisplayModal(true);
        randItem();
    }

    const closeModal = () => {
        setDisplayModal(false);
    }
    const closeWarning = () => {
        setShowWarning(false);
        setMessage("");
    }


    return (
        <div className="App">
        <Header/>
        <Input
            listContainer={listContainer}
            setListContainer={setListContainer}
            setShowWarning={setShowWarning}
            setMessage={setMessage}
        />
        
        <div className="main-section">
            {listContainer.length === 0 &&
            <EmptyMessage/>
            }
            {listContainer.length > 0 &&
            <ListDisplay
            listContainer={listContainer}
            setListContainer={setListContainer}
            />
            }
        </div>
        <div id="choose-item">
            <button disabled={!(listContainer.length >= 2) || displayModal}  className="choose-btn" onClick={showModal}>Choose Item</button>
        </div>
        <Footer/>
        
        {displayModal &&
            <div className="modal">
            {randomItem}
            <button onClick={closeModal}>Close</button>
            </div>
        }
        {showWarning &&
            <div className="warning modal">
                <p>{message}</p>
                <button onClick={closeWarning}>Close</button>
            </div>
        }
        
        </div>
    );
}

export default App;
