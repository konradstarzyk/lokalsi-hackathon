import React, { Component } from 'react'
import {
  Button,
  FormGroup,
  FormControl,
  Modal,
} from 'react-bootstrap'

import InitiativesMap from '../InitiativesMap'

class AddInitiativeForm extends Component {

  constructor(props) {
    super(props)
    this.state = { item: {} }
  }

  handleChange(attr, val) {
    this.setState({ item: {...this.state.item, [attr]: val }})
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
      <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Dodaj swoją inicjatywę!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <FormGroup>
            <FormControl
              type='text'
              placeholder='Nazwa inicjatywy'
              onChange={(e) => this.handleChange('name', e.target.value)}
            />
            <FormControl
              type='text'
              placeholder='Lokalizacja'
              onChange={(e) => this.handleChange('location', e.target.value)}
            />
            <FormControl
              type='text'
              placeholder='Opis'
              onChange={(e) => this.handleChange('description', e.target.value)}
            />
            <FormControl
              type='text'
              placeholder='Facebook event'
              onChange={(e) => this.handleChange('fbEvent', e.target.value)}
            />
            <FormControl
              type='text'
              placeholder='Inicjator'
              onChange={(e) => this.handleChange('author', e.target.value)}
            />
            <InitiativesMap
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD92FYJXNHVPKIF_y6sZ79zl0ufqupLwx8"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              handleMapOnClick={(e) => this.handleLocationChange(e)}
              items={this.state.item.lat && this.state.item.lng ? [this.state.item] : []}
            />
          </FormGroup>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => this.handleSubmit()}>Zgłoś!</Button>
        <Button onClick={() => this.props.onClose()}>Close</Button>
      </Modal.Footer>
     </Modal.Dialog>
    )
  }

}

export default AddInitiativeForm
