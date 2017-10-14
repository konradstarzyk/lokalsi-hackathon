import React, { Component } from 'react'
import { Grid, Jumbotron } from 'react-bootstrap';
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
        location: 'Warszawa Ursynów',
        time: 'Jutro',
        author: 'Łyżwa' },
      { name: 'Piaskownica',
        location: 'Warszawa Mokotów',
        time: 'Jutro',
        author: 'Zamek z piasku' },
      { name: 'Plac zabaw',
        location: 'Warszawa Targówek',
        time: 'Czerwiec',
        author: 'Zjeżdżalnia' },
      { name: 'Kino letnie',
        location: 'Warszawa Bemowo',
        time: 'Sierpień',
        author: 'Thriller' },
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
