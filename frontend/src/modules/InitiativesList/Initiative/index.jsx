import React, { Component } from 'react'

class Initiative extends Component {

  showItem() {
    document.getElementById("modal").classList.add("is-active")
  }

  closeItem(e) {
    e.stopPropagation()
    document.getElementsByClassName("is-active")[0].classList.remove("is-active")
    this.props.showItem(this.props.item.id)
  }

  renderModal() {
    const { item } = this.props
    return (
      //todo add image
        <div id="modal" className="modal">
          <div className="modal-background"></div>
          <div className="modal-content box">
            <p>Lokalizacja: {item.location}</p>
            <p>Autor: {item.author}</p>
            <p>Opis: {item.description}</p>
            <a href={item.fbEvent}>Link do wydarzenia</a>
            <button onClick={() => this.props.react(item.id, 'likes')}>
                Like
            </button>
            <button onClick={() => this.props.react(item.id, 'joins')}>
              Join
            </button>
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
            <img alt="Initiative" src={item.image} />
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
