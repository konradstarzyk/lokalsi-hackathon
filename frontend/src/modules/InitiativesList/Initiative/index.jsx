import React, { Component } from 'react'

import InitiativesMap from '../../InitiativesMap'

class Initiative extends Component {

  showItem() {
    this.props.showItem(this.props.item.id)
  }

  closeItem(e) {
    e.stopPropagation()
    this.props.closeItem()
  }

  renderModal() {
    const { item } = this.props
    return (
        <div id="modal" className={`modal ${this.props.visible ? 'is-active' : ''}`}>
          <div className="modal-background"></div>
          <div className="modal-content box">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                </figure>
              </div>
              <header className="card-header">
                <p className="card-header-title">
                  {item.name}
                </p>
              </header>
              <div className="card-content">
                <div className="content">
                  <p className="title is-5">Author: {item.author}</p>
                  <p>{item.description}</p>
                  <InitiativesMap
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD92FYJXNHVPKIF_y6sZ79zl0ufqupLwx8"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    items={item.lat && item.lng ? [item] : []}
                  />
                  <a href={item.fbEvent}>Link do wydarzenia</a>
                </div>
              </div>
              <footer className="card-footer">
                <a href="#" className="card-footer-item" onClick={(e) => this.closeItem(e)}>Zamknij</a>
                <a href="#" className="card-footer-item" onClick={() => this.props.react(item.id, 'likes')}>Like</a>
                <a href="#" className="card-footer-item" onClick={() => this.props.react(item.id, 'joins')}>Join</a>
              </footer>
            </div>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={(e) => this.closeItem(e)}></button>
        </div>
      )
  }

  render() {
    const { item } = this.props
    return (
      <div className="column is-one-quarter"
        header={item.name}
        onClick={() => this.showItem()}
      >
        <div className="box">
          <figure className="image is-square">
            <img alt="Initiative" src="http://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
          </figure>
          <strong>{item.location}</strong>
          <p>{item.time}</p>
          <p>{item.author}</p>
          <p>Likes: {item.likes}</p>
          <p>Joins: {item.joins}</p>
        </div>
        {this.renderModal()}
      </div>
    )
  }

}

Initiative.defaultProps = {
  item: {},
}

export default Initiative
