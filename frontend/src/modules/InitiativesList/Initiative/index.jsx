import React, { Component } from 'react'
import { Button, ListGroupItem, Modal } from 'react-bootstrap'

class Initiative extends Component {

  constructor(props) {
    super(props)
    this.state = { showDetails: false }
  }

  showItem() {
    this.props.showItem(this.props.item.id)
  }

  closeItem() {
    this.props.closeItem()
  }

  renderModal() {
    const { item } = this.props
    return <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>{item.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Lokalizacja: {item.location}</p>
              <p>Autor: {item.author}</p>
              <p>Opis: {item.description}</p>
              <a href={item.fbEvent}>Link do wydarzenia</a>
            </Modal.Body>
            <Modal.Footer>
              <button
                onClick={() => this.props.react(item.id, 'likes')}
              >
                Like
              </button>
              <button
                onClick={() => this.props.react(item.id, 'joins')}
              >
                Join
              </button>
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
          {item.author}
          Likes: {item.likes}
          Joins: {item.joins}
        </ListGroupItem>
        {this.props.visible && this.renderModal()}
      </div>
    )
  }

}

Initiative.defaultProps = {
  item: {},
}

export default Initiative
