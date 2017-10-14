import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

import Initiative from './Initiative'

class InitiativesList extends Component {

  renderInitiatives() {
    return this.props.initiatives.map(
      initiative => <Initiative
                      key={initiative.name}
                      item={initiative}
                      react={(id, reaction) => this.props.reactToInitiative(id, reaction)}
                      visible={this.props.visibleInitiative === initiative.id}
                      showItem={(id) => this.props.showItem(id)}
                      closeItem={() => this.props.closeItem()}
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
  initiatives: [],
}

export default InitiativesList
