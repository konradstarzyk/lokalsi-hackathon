import React, { Component } from 'react'

import Initiative from './Initiative'

class InitiativesList extends Component {

  renderInitiatives() {
    return this.props.initiatives.map(
      initiative => <Initiative
                      key={initiative.name}
                      item={initiative}
                    />
    )
  }

  render() {
    return (
      <ul>
        {this.renderInitiatives()}
      </ul>
    )
  }

}

export default InitiativesList
