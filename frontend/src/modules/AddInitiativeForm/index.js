import React, { Component } from 'react'
import ImageUploader from 'react-images-upload'

import InitiativesMap from '../InitiativesMap'

class AddInitiativeForm extends Component {

  constructor(props) {
    super(props)
    this.state = { item: {}, photo: null }
    this.onDrop = this.onDrop.bind(this)
  }

  componentWillMount() {
    document.body.style.overflow = 'hidden'
    document.body.style.height = '100vh'
  }

  componentWillUnmount() {
    document.body.style.overflow = ''
    document.body.style.height = ''
  }

  onDrop(picture, e) {
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
    this.props.onSubmit(this.state.item, this.state.photo)
  }

  render() {
    return (
      <div id="add-initiative-modal" className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-content box">
          <div className="field">
            <label className="label">Zdjęcie</label>
            <ImageUploader
              withIcon={false}
              buttonText='Wybierz zdjęcie'
              onChange={(files) => this.handleFileUpload(files[0])}
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}
            />
          </div>
          <div className="field">
            <label className="label">Nazwa inicjatywy</label>
            <div className="control">
              <input className="input" type="text" placeholder="Nazwa" onChange={(e) => this.handleChange('name', e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className="label">Szacowany koszt (PLN)</label>
            <div className="control">
              <input className="input" type="number" placeholder="PLN" onChange={(e) => this.handleChange('cost', e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className="label">Opis</label>
            <div className="control">
              <input className="input" type="text" placeholder="Dodaj opis" onChange={(e) => this.handleChange('description', e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className="label">Facebook event</label>
            <div className="control">
              <input className="input" type="text" placeholder="Event link" onChange={(e) => this.handleChange('event', e.target.value)} />
            </div>
           </div>
          <div className="field">
            <label className="label">Inicjator</label>
            <div className="control">
              <input className="input" type="text" placeholder="Autor inicjatywy" onChange={(e) => this.handleChange('author', e.target.value)} />
           </div>
          </div>
          <div className="field">
            <label className="label">Wybierz dzielnicę</label>
            <div className="control">
              <div className="select">
                <select onChange={(e) => this.handleChange('area', e.target.value)}>
                  <option value="Bemowo">Bemowo</option>
                  <option value="Białołęka">Białołęka</option>
                  <option value="Bielany">Bielany</option>
                  <option value="Mokotów">Mokotów</option>
                  <option value="Ochota">Ochota</option>
                  <option value="Praga-Południe">Praga-Południe</option>
                  <option value="Praga-Północ">Praga-Północ</option>
                  <option value="Rembertów">Rembertów</option>
                  <option value="Śródmieście">Śródmieście</option>
                  <option value="Targówek">Targówek</option>
                  <option value="Ursus">Ursus</option>
                  <option value="Ursynów">Ursynów</option>
                  <option value="Wawer">Wawer</option>
                  <option value="Wesoła">Wesoła</option>
                  <option value="Wilanów">Wilanów</option>
                  <option value="Włochy">Włochy</option>
                  <option value="Wola">Wola</option>
                  <option value="Żoliborz">Żoliborz</option>
                </select>
              </div>
           </div>
          </div>
          <div className="field">
            <label className="label">Wybierz lokalizację</label>
            <div className="control">
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
          </div>
          <div className="field is-grouped space-between">
            <p className="control">
              <a className="button is-danger" onClick={(e) => this.props.onClose(e)}>Zamknij</a>
            </p>
            <p className="control">
              <a className="button is-primary" onClick={() => this.handleSubmit()}>Dodaj!</a>
            </p>
          </div>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={(e) => this.props.onClose(e)}></button>
      </div>
    )
  }
}

export default AddInitiativeForm
