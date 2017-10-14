import React, { Component } from 'react'

import AddInitiativeForm from './modules/AddInitiativeForm'
import InitiativesList from './modules/InitiativesList'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initiatives: [],
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
      <div>
        <section className="hero is-info has-bg-image">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Lokalsi
              </h1>
              <h2 className="subtitle">
                Inicjatywy sąsiedzkie
              </h2>
              <a className="button is-primary" onClick={() => this.openAddItemForm()}>
                Zgłość swoją inicjatywę!
              </a>
            </div>
          </div>
        </section>

        <InitiativesList initiatives={this.state.initiatives} />
        {this.state.addItemOpen &&
          <AddInitiativeForm
            onClose={()=> this.closeAddItemForm()}
            onSubmit={(initiative) => this.addInitiative(initiative)}
          />
        }
      </div>
    );
  }
}

export default App
