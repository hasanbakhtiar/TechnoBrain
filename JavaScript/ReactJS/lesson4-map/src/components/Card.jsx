import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="col-12 col-sm-12 col-md-3">
        <div className="card" >
          <img height="150" src={this.props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.brandtitle}</h5>
            <p className="card-text">{this.props.modeltitle}</p>
            <p className="card-text">{this.props.color}</p>
            <a href="#" className="btn btn-primary">
              read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
