import React, { Component } from 'react'
import { Button, Jumbotron } from 'react-bootstrap';
import './App.css'

import AddInitiativeForm from './modules/AddInitiativeForm'
import InitiativesList from './modules/InitiativesList'
import InitiativesMap from './modules/InitiativesMap'

const initiativesById = (initiatives = []) =>
  initiatives.reduce((obj, init) => ({ ...obj, [init.id]: init }), {})


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visibleInitiative: null,
      initiatives: {
        1: { name: 'hello' }
      },
      addItemOpen: false,
    }
  }

  componentDidMount() {
    return new Promise((resolve, reject) => {
      fetch('/api/initiatives', {
        headers: { 'Accept': 'application/json' },
      })
      .then(response => {
        if (response.ok) {
          return response.json().then(json => {
            const initiatives = json._embedded.initiatives
            this.setState({ initiatives: initiativesById(initiatives) })
          })
        } else  {
          console.log(response.status)
        }
      })
      .catch((error) => console.log('error:', JSON.stringify(error)))
    })
  }

  addInitiative(initiative) {
    return new Promise((resolve, reject) => {
      fetch('/api/initiatives',
        {
          method: 'POST',
          body: JSON.stringify(initiative),
          headers: { 'Content-Type': 'application/json' }
        })
      .then(response => {
        if (response.ok) {
          return response.json().then(json => {
            this.setState({
              initiatives: {...this.state.initiatives, [json.id]: json },
              addItemOpen: false,
            })
          })
        } else  {
          console.log(response.status)
        }
      })
      .catch((error) => console.log('error:', JSON.stringify(error)))
    })
  }

  reactToInitiative(id, reaction) {
    return new Promise((resolve, reject) => {
      fetch(`/api/initiatives/${id}/${reaction}`, {
        method: 'POST'
      })
      .then(response => {
        if (response.ok) {
          return response.json().then(json => {
            this.setState({
              initiatives: { ...this.state.initiatives, [id]: json },
            })
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


  render() {
    const { initiatives } = this.state
    const initiativesList = Object.keys(initiatives).map(key => initiatives[key])

    return (
      <span>
        <Jumbotron className='App-intro'>
          <header>
            <h1 className="appTitle">lokalsi.waw.pl</h1>
          </header>
        </Jumbotron>
        <Button
          onClick={() => this.openAddItemForm()}
        >
          Zgłość swoją inicjatywę!
        </Button>
        <InitiativesMap
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px`, width: `90%`, margin: 'auto' }} />}
          mapElement={<div style={{ height: `100%` }} />}
          items={initiativesList}
          showItem={(id) => this.setState({ visibleInitiative: id })}
        />
        <InitiativesList
          initiatives={initiativesList}
          reactToInitiative={(id, reaction) => this.reactToInitiative(id, reaction)}
          visibleInitiative={this.state.visibleInitiative}
          showItem={(id) => this.setState({ visibleInitiative: id })}
          closeItem={() => this.setState({ visibleInitiative: null })}
        />
        {this.state.addItemOpen && <AddInitiativeForm
          onClose={()=> this.closeAddItemForm()}
          onSubmit={(initiative) => this.addInitiative(initiative)}
        />}
      </span>
    );
  }
}

export default App
