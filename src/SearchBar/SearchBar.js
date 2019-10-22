import React, { Component } from 'react';
import SearchBox from './SearchBox/SearchBox';
import FilterOptions from './FilterOptions/FilterOptions';
import './SearchBar.css';

class SearchBar extends Component {
    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-heading">
                    <h1>Google Book Search</h1>
                </div>
                <div className="SearchBar-controls">
                    <SearchBox 
                        handleSearch={this.props.handleSearch}
                    />
                    <FilterOptions 
                        handleBookType={this.props.handleBookType}
                        handlePrintType={this.props.handlePrintType}
                    />
                </div>
            </div>
        );
    }
}

export default SearchBar;