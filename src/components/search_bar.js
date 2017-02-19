import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnInputChange = this.handleOnInputChange.bind(this);
    }

    handleOnInputChange(event){
        event.preventDefault();
        this.props.onSearch(event.target.value)
    }

    render(){
        return(
            <input onChange={this.handleOnInputChange}/>
        );
    }
}

export default SearchBar;
