import React, { Component } from 'react';

// const SearchBar = ()=>{
//   return <input />
// }

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state={
      term: ''
    }
  }
  // onInputChange(event){
  //   console.log(event.target.value);
  // }
  render(){
    //return <input onChange={this.onInputChange.bind(this)} />
    //return <input onChange={(event)=>console.log(event.target.value)} />
    // onChange={event=>this.setState({ term: event.target.value })}
    return (
      <div className="search-bar">
        <input value={this.state.term} onChange={event=>this.onInputChange(event.target.value)} />
      </div>
    );
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
