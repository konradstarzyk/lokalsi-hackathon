import React, { Component } from 'react'
import { ListGroupItem } from 'react-bootstrap'

class Initiative extends Component {

  constructor(props) {
    super(props)
    this.state = { showDetails: false }
  }

  showItem() {
    this.setState({ showDetails: true })
  }

  hideItem() {
    this.setState({ showDetails: false })
  }

  render() {
    const { item } = this.props

    return (
      <div>
        <ListGroupItem
          header={item.name}
          onClick={() => this.showItem()}
        >
          <div>{item.location}</div>
          <div>{item.time}</div>
          <div>{item.author}</div>
        </ListGroupItem>
      </div>
    )
  }

}

export default Initiative
