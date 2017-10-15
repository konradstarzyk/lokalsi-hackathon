import React, { Component } from 'react'

import AddInitiativeForm from './modules/AddInitiativeForm'
import InitiativesList from './modules/InitiativesList'
import InitiativesMap from './modules/InitiativesMap'
import logo from './assets/Lokalsi.png'
import './App.css'

const encodeFile = (file, name='file') => {
  let formData = new FormData()
  formData.append(name, file)
  return formData
}

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
      fetch('/api/initiatives?projection=mainPage', {
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

  addInitiative(initiative, photo) {
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
            return photo ? this.uploadPhoto(photo, json.id) : null
          })
        } else  {
          return console.log(response.status)
        }
      })
      .catch((error) => console.log('error:', JSON.stringify(error)))
    })
  }

  uploadPhoto(photo, id) {
    return new Promise((resolve, reject) => {
      fetch(`/api/initiatives/${id}/photo`,
        {
          method: 'POST',
          body: encodeFile(photo, photo.name),
          headers: { 'Content-Type': 'application/json' }
        })
      .then(response => {
        if (response.ok) {
          return response.json().then(json => {
            this.setState({
              initiatives: {
                ...this.state.initiatives,
                [id]: json },
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

  closeAddItemForm(e) {
    e.stopPropagation()
    this.setState({ addItemOpen: false })
    document.getElementsByClassName("is-active")[0].classList.remove("is-active")
  }

  render() {
    const { initiatives } = this.state
    const initiativesList = Object.keys(initiatives).map(key => initiatives[key])

    return (
      <div>
        <section className="hero has-bg-image">
          <div className="hero-body is-flex-mobile">
            <div className="container">
              <figure id="logo" className="image">
                <img alt="Initiative" src={logo} />
              </figure>
              <a id="add-initiative-button" className="button is-large pull-right" onClick={() => this.openAddItemForm()}>
                Zgłoś swoją inicjatywę!
              </a>
            </div>
          </div>
        </section>
        <InitiativesList
          initiatives={initiativesList}
          reactToInitiative={(id, reaction) => this.reactToInitiative(id, reaction)}
          visibleInitiative={this.state.visibleInitiative}
          showItem={(id) => this.setState({ visibleInitiative: id })}
          closeItem={() => this.setState({ visibleInitiative: null })}
        />
        <InitiativesMap
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD92FYJXNHVPKIF_y6sZ79zl0ufqupLwx8"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div className="container" style={{ height: `400px`, width: `90%`, margin: 'auto' }} />}
          mapElement={<div style={{ height: `100%` }} />}
          items={initiativesList}
          showItem={(id) => this.setState({ visibleInitiative: id })}
        />
        {this.state.addItemOpen &&
          <AddInitiativeForm
            onClose={(e)=> this.closeAddItemForm(e)}
            onSubmit={(initiative) => this.addInitiative(initiative)}
          />
        }
      </div>
    )
  }
}

export default App
