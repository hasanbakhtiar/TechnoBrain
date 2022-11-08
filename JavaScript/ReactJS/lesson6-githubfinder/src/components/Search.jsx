import React, { Component } from "react";

class Search extends Component {
    constructor(){
        super();
        this.state={
            keyword:""
        }
    }
    inputChange=(e)=>{
        this.setState({keyword:e.target.value})
    }
    formSubmit=(e)=>{
        e.preventDefault();
        this.props.searchValue(this.state.keyword)
    }
  render() {
    return (
   <div>
    <form onSubmit={this.formSubmit}>
         <div className="input-group mt-5">
        <input
          type="text"
          className="form-control"
          placeholder="enter username"
          onChange={this.inputChange}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
        >
          Search
        </button>
      </div>
   </form>
   </div>
    );
  }
}

export default Search;
