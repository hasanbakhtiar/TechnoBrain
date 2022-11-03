import React, { Component } from "react";
import metro from '../img/metro.jpg';
import lord from '../img/lord.jpg';
class BookApp extends Component {
    constructor(){
        super();
        this.state={
            bookImg:metro,
            bookName:"Metro 2033",
            bookPrice:24,
            bookPageCount:700
        }
    }
    changeBook=()=>{
        this.setState({
            bookImg:lord,
            bookName:"Lord of Ring",
            bookPrice:17,
            bookPageCount:300
        })
    }
  render() {
    return (
      <div className="container mt-5">
        <div className="card" style={{ width: "18rem" }}>
          <img  src={this.state.bookImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.state.bookName}</h5>
            <p className="card-text">
             {this.state.bookPrice} manat
            </p>
            <p>sehife: {this.state.bookPageCount}</p>
            <button onClick={this.changeBook} className="btn btn-primary">
            next book
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BookApp;
