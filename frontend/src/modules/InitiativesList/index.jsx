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
      <section className="section container">
        <div className="columns is-multiline">
          {this.renderInitiatives()}
        </div>
      </section>
    )
  }

}

export default InitiativesList
