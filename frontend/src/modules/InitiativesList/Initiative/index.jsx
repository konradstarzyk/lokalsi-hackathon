import React, { Component } from 'react'

import InitiativesMap from '../../InitiativesMap'
import './styles.css'

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
    const photoSrc = item.photos && item.photos.length ? `http://lokalsi.waw.pl${item.photos[0].url}` : "http://bulma.io/images/placeholders/1280x960.png"

    return (
      <div id="modal" className={`modal ${this.props.visible ? 'is-active' : ''}`}>
        <div className="modal-background"></div>
        <div className="modal-content box">
          <div className="card">
            <div className="card-image">
              <header className="card-header">
                <p className="card-header-title title is-4">
                  {item.name}
                </p>
              </header>
              <figure className="image is-4by3">
                <img src={photoSrc} alt="Placeholder" />
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                <p className="submit-proposal-info">
                  <span className="icon">
                    <i className="fa fa-check-square-o"></i>
                  </span>
                  <span>Możesz zgłosić tę inicjatywę do Budżetu Partycypacyjnego m.st.Warszawy</span>
                </p>
                <p>Inicjator: {item.author}</p>
                <p>Dzielnica: {item.area}</p>
                <p>{item.description}</p>
                <a href={item.fbEvent}>Link do wydarzenia</a>
              </div>
              {this.props.visible && <InitiativesMap
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD92FYJXNHVPKIF_y6sZ79zl0ufqupLwx8"
                loadingElement={<div style={{ height: `400px` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `400px` }} />}
                items={item.lat && item.lng ? [item] : []}
              />}
            </div>
            <footer className="card-footer">
              <a className="reaction-button button is-medium is-danger card-footer-item" onClick={(e) => this.closeItem(e)}>Zamknij</a>
              <a className="reaction-button button is-medium is-info card-footer-item" onClick={() => this.props.react(item.id, 'likes')}>
                <span>Like</span>
                <span className="icon">
                  <i className="fa fa-thumbs-up"></i>
                </span>
              </a>
              <a className="button is-medium is-primary card-footer-item" onClick={() => this.props.react(item.id, 'joins')}>
                <span>Join</span>
                <span className="icon">
                  <i className="fa fa-users"></i>
                </span>
              </a>
              <a className="reaction-button button is-medium is-warning card-footer-item" onClick={() => this.props.react(item.id, 'submitBudgetProposal')}>
                <span>Zgłoś</span>
                <span className="icon">
                  <i className="fa fa-check-square-o"></i>
                </span>
              </a>
            </footer>
          </div>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={(e) => this.closeItem(e)}></button>
      </div>
    )
  }

  render() {
    const { item } = this.props
    const photoSrc = item.photos && item.photos.length ? `http://lokalsi.waw.pl${item.photos[0].url}` : "http://bulma.io/images/placeholders/1280x960.png"
    return (
      <div className="column is-one-quarter"
        onClick={() => this.showItem()}
      >
        <div className="box">
          <figure className="image is-square">
            <img alt="Initiative" src={photoSrc} />
          </figure>
          <p className="card-header-title title is-4">
            {item.name}
          </p>
          <p className="submit-proposal-info">
            <span className="icon">
              <i className="fa fa-check-square-o"></i>
            </span>
            <span>Zgłoś do budżetu</span>
          </p>
          <p>{item.area}</p>
          <div className="reaction-wrapper">
            <p>
              <span className="icon">
                <i className="fa fa-thumbs-up"></i>
              </span>
              Likes: {item.likes}
            </p>
            <p>
              <span className="icon">
                <i className="fa fa-users"></i>
              </span>
              Joins: {item.joins}
            </p>
          </div>
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
