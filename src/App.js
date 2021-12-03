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
            displayModal={displayModal}
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
            <button disabled={!(listContainer.length >= 2) || displayModal} className="choose-btn btn" onClick={showModal}>Decide</button>
        </div>
        <Footer/>
        
        {displayModal &&
            <div className="modal-wrap">
                <div className="modal">
                    <div className="banner default">
                        <div className="banner-inner">
                            Decision
                        </div>
                    </div>
                    <p className="modal-text">{randomItem}</p>
                    <button onClick={closeModal} className="try-again-btn btn">Close and Decide Again</button>
                </div>
            </div>
        }
        {showWarning &&
            <div className="modal-wrap">
                <div className="modal">
                    <div className="banner warning">
                        <div className="banner-inner">
                            Warning
                        </div>
                    </div>
                    <p className="modal-text">{message}</p>
                    <button onClick={closeWarning} className="close-btn btn">Close</button>
                </div>
            </div>
        }
        
        </div>
    );
}

export default App;
