import React, { Component } from 'react'
import { Button, Jumbotron } from 'react-bootstrap';
import './App.css'

import AddInitiativeForm from './modules/AddInitiativeForm'
import InitiativesList from './modules/InitiativesList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initiatives: [],
      addItemOpen: false,
    }
  }

  addInitiative(initiative) {
    return new Promise((resolve, reject) => {
      fetch('/api/initiatives', { method: 'POST', body: JSON.stringify(initiative) })
      .then(response => {
        if (response.ok) {
          this.setState({
            initiatives: [...this.state.initiatives, initiative]
          })
        } else  {
          console.log(response.status)
        }
      })
      .catch((error) => console.log('error:', JSON.stringify(error)))
    })
  }

  openAddItemForm() {
    this.setState({ addItemOpen: true })
  }

  closeAddItemForm() {
    this.setState({ addItemOpen: false })
  }

  componentDidMount() {
    return new Promise((resolve, reject) => {
      fetch('/api/initiatives')
      .then(response => {
        if (response.ok) {
          return response.json().then(json => {
            console.log(json)
            this.setState({ initiatives: json._embedded.initiatives })
          })
        } else  {
          console.log(response.status)
        }
      })
      .catch((error) => console.log('error:', JSON.stringify(error)))
    })
  }

  render() {
    return (
      <span>
        <Jumbotron className='App-intro'>
          <header>
            <h1 className="appTitle">zróbmy.waw.pl</h1>
          </header>
        </Jumbotron>
        <Button
          onClick={() => this.openAddItemForm()}
        >
          Zgłość swoją inicjatywę!
        </Button>
        <InitiativesList initiatives={this.state.initiatives} />
        {this.state.addItemOpen && <AddInitiativeForm
          onClose={()=> this.closeAddItemForm()}
          onSubmit={(initiative) => this.addInitiative(initiative)}
        />}
      </span>
    );
  }
}

export default App
