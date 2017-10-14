import React, { Component } from 'react'
import logo from './logo.svg'
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
      <div className="App">
        <header className="zrobmy.waw.pl">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to zrobmy.waw.pl</h1>
        </header>
        <p className="App-intro">
          Zróbmy w Warszawie
        </p>
        <InitiativesList initiatives={this.state.initiatives} />
      </div>
    );
  }
}

export default App
