import React, { Component } from 'react'
import { Button, ListGroupItem, Modal } from 'react-bootstrap'

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
      <div>
        <ListGroupItem
          header={item.name}
          onClick={() => this.showItem()}
        >
          {item.location}
          {item.time}
          {item.author}
        </ListGroupItem>
        {this.state.showDetails && this.renderModal()}
      </div>
    )
  }

}

export default Initiative
