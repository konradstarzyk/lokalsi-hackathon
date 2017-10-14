import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

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
      <ListGroup>
        {this.renderInitiatives()}
      </ListGroup>
    )
  }

}

InitiativesList.defaultProps = {
  initiatives: []
}

export default InitiativesList
