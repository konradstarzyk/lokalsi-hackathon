import React, { Component } from 'react'
import {
  Button,
  FormGroup,
  FormControl,
  Modal,
} from 'react-bootstrap'

class AddInitiativeForm extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange(attr, val) {
    this.setState({ item: {...this.state.item, [attr]: val }})
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
              placeholder='Czas'
              onChange={(e) => this.handleChange('time', e.target.value)}
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
