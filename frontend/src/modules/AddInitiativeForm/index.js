import React, { Component } from 'react'

import InitiativesMap from '../InitiativesMap'
import './styles.css'

class AddInitiativeForm extends Component {

  constructor(props) {
    super(props)
    this.state = { item: {} }
    this.onDrop = this.onDrop.bind(this)
  }

  onDrop(picture, e) {
    console.log(picture, e)
    this.setState({ picture })
    e.preventDefault()
  }

  handleChange(attr, val) {
    this.setState({ item: {...this.state.item, [attr]: val }})
  }

  handleFileUpload(file) {
    this.setState({ photo: file })
  }

  handleLocationChange(e) {
    this.setState({
      item: {
        ...this.state.item,
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      }
    })
  }

  handleSubmit() {
    this.props.onSubmit(this.state.item)
  }

  render() {
    return (
      <div id="add-initiative-modal" className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-content box">
          <div className="field">
            <label className="label">Nazwa inicjatywy</label>
            <div className="control">
              <input className="input" type="text" placeholder="" onChange={(e) => this.handleChange('name', e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className="label">Zdjęcie</label>
            <div className="control">
              <input type='file' onChange={(e) => this.handleFileUpload(e.target.files[0])} />
            </div>
          </div>
          <div className="field">
            <label className="label">Opis</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" onChange={(e) => this.handleChange('description', e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className="label">Facebook event</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" onChange={(e) => this.handleChange('event', e.target.value)} />
            </div>
           </div>
          <div className="field">
            <label className="label">Inicjator</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" onChange={(e) => this.handleChange('author', e.target.value)} />
           </div>
          </div>
          <div className="field is-grouped space-between">
            <p className="control">
              <a className="button is-danger" onClick={(e) => this.props.onClose(e)}>Zamknij</a>
            </p>
            <p className="control">
              <a className="button is-primary" onClick={() => this.handleSubmit()}>Zgłoś!</a>
            </p>
          </div>
          <InitiativesMap
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD92FYJXNHVPKIF_y6sZ79zl0ufqupLwx8"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              handleMapOnClick={(e) => this.handleLocationChange(e)}
              items={this.state.item.lat && this.state.item.lng ? [this.state.item] : []}
           />
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={(e) => this.props.onClose(e)}></button>
      </div>
    )
  }
}

export default AddInitiativeForm
