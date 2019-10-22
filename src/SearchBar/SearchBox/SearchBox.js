import React, {Component} from 'react';
import './SearchBox.css';

class SearchBox extends Component {

    onSubmitForm(e) {
        e.preventDefault();
        //e.stopImmediatePropagation()
        //console.log(e.target.searchTerm.value);
        //console.log(this.props);
        
        this.props.handleSearch(e.target.searchTerm.value);
    }

    render() {
        return (
            <div className="SearchBox">
                <form onSubmit={(e) => this.onSubmitForm(e)}>
                    <label htmlFor="search">Search:</label>
                    <input
                        id="searchTerm"
                        name="searchTerm"
                        type="text"
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default SearchBox;