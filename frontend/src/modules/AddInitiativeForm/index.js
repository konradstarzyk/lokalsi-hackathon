import React, { Component } from 'react'

import './styles.css'

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
            <label className="label">Czas</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" onChange={(e) => this.handleChange('time', e.target.value)} />
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
          <div className="field is-grouped space-between">
            <p className="control">
              <a className="button is-danger" onClick={(e) => this.props.onClose(e)}>Zamknij</a>
            </p>
            <p className="control">
              <a className="button is-primary" onClick={() => this.handleSubmit()}>Zgłoś!</a>
            </p>
          </div>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={(e) => this.props.onClose(e)}></button>
      </div>

    )
  }
}

export default AddInitiativeForm
