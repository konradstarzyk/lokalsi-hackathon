import React, { Component } from 'react'
import { Button, Jumbotron } from 'react-bootstrap';
import './App.css'

import AddInitiativeForm from './modules/AddInitiativeForm'
import InitiativesList from './modules/InitiativesList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initiatives: [
        { name: 'Lodowisko',
          description: 'Zróbmy razem lodowisko dla dzieciaków',
          location: 'Warszawa Ursynów',
          time: '28.12.2017',
          author: 'Andrzej',
          event: 'www.facebook.com',
        },
        { name: 'Piaskownica',
          description: 'Przy ulicy Kubusia Puchatka lezy sporo piasku, może zrobilibyśmy z tego piaskownicę?',
          location: 'Warszawa Mokotów',
          time: 'Maj 2018',
          author: 'Aneta',
          event: 'www.facebook.com',
        },
        { name: 'Plac zabaw',
          description: 'Posiadam sporo drewnianych elementów, z których można by zrobić plac zabaw dla dzieciaków. Zapraszam do kontaktu.',
          location: 'Warszawa Targówek',
          time: 'Czerwiec 2018',
          author: 'Tomek',
          event: 'www.facebook.com',
        },
      ],
      addItemOpen: false,
    }
  }

  addInitiative(initiative) {
    this.setState({
      initiatives: [...this.state.initiatives, initiative]
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
      .catch((error) => console.log('api error:', JSON.stringify(error)))
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
