import './App.css';
import CardList from './CardList';
import React from "react"
import Modal from "./Modal"
import cardData from "./db.json"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        data: cardData,
        person: 0,
        isNew: true,
        isOpen: false,
        name: "",
        from: "",
        title: "",
        employer: "",
        movie1: "",
        movie2: "",
        movie3: "",
        nextId: cardData.length
    }
    this.handleNext = this.handleNext.bind(this)
    this.handlePrev = this.handlePrev.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
}

handleNext() {
    this.setState(prev => ({person: ++prev.person}))
}

handlePrev() {
    this.setState(prev => ({person: --prev.person}))
}

  openModal(personId) {
    if(personId == null) {
      this.setState({isOpen: true, isNew: true})
    } else {
      this.setState({
        isNew: false,
        isOpen: true,
        name: this.state.data[personId].name,
        from: this.state.data[personId].from,
        title: this.state.data[personId].title,
        employer: this.state.data[personId].employer,
        movie1: this.state.data[personId].movies[0],
        movie2: this.state.data[personId].movies[1],
        movie3: this.state.data[personId].movies[2]
      })
    }
  }

  closeModal() {
    this.setState({isOpen: false})
  }

  handleChange(e) {
    e.persist()
    if(e.target.id === "name") {
      this.setState({name: e.target.value})
    } else if(e.target.id === "from") {
      this.setState({from: e.target.value})
    } else if(e.target.id === "title") {
      this.setState({title: e.target.value})
    } else if(e.target.id === "employer") {
      this.setState({employer: e.target.value})
    } else if(e.target.id === "movie1") {
      this.setState({movie1: e.target.value})
    } else if(e.target.id === "movie2") {
      this.setState({movie2: e.target.value})
    } else if(e.target.id === "movie3") {
      this.setState({movie3: e.target.value})
    } else {
      console.log("Something went wrong in the handleChange function")
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.data)
    if(!this.state.name || !this.state.from || !this.state.title || !this.state.employer || !this.state.movie1 || !this.state.movie2 || !this.state.movie3) {
      alert("All fields must be filled out")
    }

    if(!this.state.isNew) {
      this.handleDelete(this.state.person)
      this.setState({person: this.state.data.length-1})
    } else {
      this.setState({person: this.state.data.length})
    }

    this.setState(prev => ({nextId: ++prev.nextId}))
    
    this.setState(prev => ({
      data: [...prev.data,
          {id: this.state.nextId,
          name: this.state.name,
          from: this.state.from,
          title: this.state.title,
          employer: this.state.employer,
          movies: [this.state.movie1, this.state.movie2, this.state.movie3]
        }
      ]
    }))
    
    this.setState({
      isOpen: false,
      name: "",
      from: "",
      title: "",
      employer: "",
      movie1: "",
      movie2: "",
      movie3: ""})
  }

  handleDelete(id) {
    this.setState(prev => ({data: prev.data.filter((person, index) => index !== id)}))
    this.setState({person: 0})
  }


  render() {
    const length = this.state.data.length
  return (
    <div className="App">
      <header className="App-header">
        <h1>Home</h1>
      </header>
      <main>
        {this.state.isOpen ? <Modal isOpen={this.state.isOpen} closeModal={this.closeModal} isNew={this.state.isNew} data={this.state.data} person={this.state.person} name={this.state.name} from={this.state.from} title={this.state.title} employer={this.state.employer} movie1={this.state.movie1} movie2={this.state.movie2} movie3={this.state.movie3} handleChange={this.handleChange} handleSubmit={this.handleSubmit} /> 
        : <CardList openModal={this.openModal} closeModal={this.closeModal} length={length} data={this.state.data} person={this.state.person} handleNext={this.handleNext} handlePrev={this.handlePrev} handleDelete={this.handleDelete} />}
      </main>
    </div>
  );
}
}

export default App;
