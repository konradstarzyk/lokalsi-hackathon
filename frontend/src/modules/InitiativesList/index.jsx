import React, { Component } from 'react'

import Initiative from './Initiative'

class InitiativesList extends Component {

  renderInitiatives() {
    return this.props.initiatives.map(
      (initiative, index) => <Initiative
                      key={`${initiative.name}-${index}`}
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
      <section className="section container">
        <div className="columns is-multiline">
          {this.renderInitiatives()}
        </div>
      </section>
    )
  }

}

InitiativesList.defaultProps = {
  initiatives: [],
}

export default InitiativesList
