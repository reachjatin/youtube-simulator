import React, { Component } from 'react';

//functional component
// const SearchBar = () => {
//   return <input />;
// }


//class level component
class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = {term: ''};
  }

  //every React component must have a render method
  render() {
    return (
      <div className="search-bar">
      <input
      value={this.state.term}
      onChange={event => this.onInputChange(event.target.value)}/>
      </div>
    );

  }

   onInputChange(term){
     this.setState({term});
     this.props.onSearchTermChange(term);
   }

}


export default SearchBar;
