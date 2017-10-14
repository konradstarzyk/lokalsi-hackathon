import React, { Component } from 'react'

class Initiative extends Component {

  render() {
    const { item } = this.props

    return (
      <li>
        <div>{item.name}</div>
        <div>{item.location}</div>
        <div>{item.time}</div>
        <div>{item.author}</div>
      </li>
    )
  }

}

export default Initiative
