import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap';
import './App.css'


import InitiativesList from './modules/InitiativesList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initiatives: [],
    }
  }

  componentDidMount() {
    const initiatives = [
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
      { name: 'Kino letnie',
        description: 'W naszym podwórku przy ulicy Kinowej można by wyświetlać filmy w ramach sąsiedzkiego kina letniego. Jedna ściana idealnie się do tego nadaje. Zapraszam do wspólnej inicjatywy.',
        location: 'Warszawa Bemowo',
        time: 'Sierpień 2018',
        author: 'Staszek',
        event: 'www.facebook.com',
      },
    ]

    this.setState({ initiatives })
  }

  render() {
    return (
      <span>
        <Jumbotron className='App-intro'>
          <header>
            <h1 className="appTitle">zróbmy.waw.pl</h1>
          </header>
        </Jumbotron>
        <InitiativesList initiatives={this.state.initiatives} />
      </span>
    );
  }
}

export default App
