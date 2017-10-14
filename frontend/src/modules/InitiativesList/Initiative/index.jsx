import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'

class Initiative extends Component {

  constructor(props) {
    super(props)
    this.state = { showDetails: false }
  }

  showItem() {
    this.setState({ showDetails: true })
  }

  closeItem() {
    this.setState({ showDetails: false })
  }

  renderModal() {
    const { item } = this.props
    return <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>{item.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Lokalizacja: {item.location}</p>
              <p>Kiedy? {item.time}</p>
              <p>Autor: {item.author}</p>
              <p>Opis: {item.description}</p>
              <a href={item.event}>Link do wydarzenia</a>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => this.closeItem()}>Close</Button>
            </Modal.Footer>
           </Modal.Dialog>
  }

  render() {
    const { item } = this.props
    return (
      <div className="column is-quarter"
        header={item.name}
        onClick={() => this.showItem()}
      >
        <div className="box">
          <figure className="image is-square">
            <img alt="Initiative" src="http://bulma.io/images/placeholders/256x256.png" />
          </figure>
          <strong>{item.location}</strong>
          <p>{item.time}</p>
          <p>{item.author}</p>
        </div>
        {this.state.showDetails && this.renderModal()}
      </div>
    )
  }

}

export default Initiative
