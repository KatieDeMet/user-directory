import './App.css';
import CardList from './CardList';
import {useState} from "react"
import Modal from "./Modal"

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Home</h1>
      </header>
      <main>
        {modalIsOpen ? <Modal isOpen={modalIsOpen} closeModal={closeModal} /> : <CardList openModal={openModal} closeModal={closeModal} />}
      </main>
    </div>
  );
}

export default App;
